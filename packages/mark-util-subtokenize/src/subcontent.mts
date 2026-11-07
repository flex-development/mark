/**
 * @file subcontent
 * @module mark-util-subtokenize/subcontent
 */

import { splice } from '@flex-development/mark-util-chunked'
import { codes, ev } from '@flex-development/mark-util-symbol'
import type {
  Chunk,
  Event,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok } from 'devlop'
import group from './internal/group.mts'

export default subcontent

/**
 * Tokenize embedded content for a single token.
 *
 * The algorithm has three phases:
 *
 * 1. Feed linked chunk tokens to a child tokenizer
 * 2. Determine which child events belong to each linked token
 * 3. Replace `chunk*` events with their corresponding child events
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The parent event stream
 * @param {number} eventIndex
 *  The index of the corresponding `enter` event in `events`
 * @return {undefined}
 */
function subcontent(
  this: void,
  events: Event[],
  eventIndex: number
): undefined {
  ok(events[eventIndex], 'expected `events[eventIndex]`')
  const [event, token, context] = events[eventIndex]

  ok(event === ev.enter, 'expected enter event')
  ok(token.contentType, 'expected `token.contentType`')
  ok(/^chunk[A-Z][a-z]+$/.test(token.type), 'expected chunk token')

  /**
   * The child tokenizer responsible for embedded content.
   *
   * @const {TokenizeContext} child
   */
  const child: TokenizeContext = token._tokenizer && 'write' in token._tokenizer
    ? token._tokenizer
    : context.parser[token.contentType](token.start)

  /**
   * The parent `enter` event positions for each linked token.\
   * The matching `exit` event is expected to be at `positions[i] + 1` in the
   * event stream.
   *
   * @const {number[]} positions
   */
  const positions: number[] = []

  /**
   * The current token.
   *
   * Each chunk token is linked together:
   *
   *   previous <---> current <---> next
   *
   * This lets a logical piece of content span multiple tokens.
   *
   * @var {Token | null | undefined} token
   */
  let current: Token | null | undefined = token

  /**
   * The index of the `enter` event for the {@linkcode current} linked token.
   *
   * Linked tokens occur in source order, so each search can continue after the
   * previously discovered `enter` event.
   *
   * @var {number} position
   */
  let position: number = eventIndex - 1

  /**
   * The previous linked token.
   *
   * @var {Token | null | undefined} previous
   */
  let previous: Token | null | undefined

  // loop through linked tokens to pass them in order to the child tokenizer.
  while (current) {
    // find the `enter` event index for `current`.
    while (++position < events.length) {
      ok(events[position], 'expected `events[j]`')
      const [event, eventToken] = events[position]!

      // store `enter` event index for linked token.
      // this is used to splice child events back into the parent stream.
      if (event === ev.enter && eventToken === current) {
        positions.push(position)
        break
      }
    }

    ok(position < events.length, 'expected `enter` event for linked token')
    ok(!previous || current.previous === previous, 'expected previous to match')
    ok(!previous || previous.next === current, 'expected next to match')

    // write to `child` if the event stream hasn't been closed.
    // the child event stream is considered closed when a tokenizer has already
    // been attached to the `current` token. the child parse is assumed to have
    // already been ran by the construct who attached to the tokenizer.
    if (!current._tokenizer) {
      /**
       * The chunks contributed by the {@linkcode current} linked token.
       *
       * @const {Chunk[]} chunks
       */
      const chunks: Chunk[] = context.sliceStream(current)

      // tell the `child` tokenizer where the current line starts.
      // since containers "nibble" a prefix from margins,
      // where a line starts after that prefix is defined here.
      if (current.previous) child.defineSkip(current.start)

      // signal end of `child` stream.
      if (!current.next) chunks.push(codes.eos)

      // write chunks to the `child` stream.
      void child.write(chunks)
    }

    // move onto the next linked token.
    previous = current
    current = current.next
  }

  /**
   * The list of child tokens that have already been seen.
   *
   * @const {WeakSet<Token>} seen
   */
  const seen: WeakSet<Token> = new WeakSet<Token>()

  /**
   * The index of the current {@linkcode child} event.
   *
   * @var {number} index
   */
  let childIndex: number = child.events.length - 1

  // find the child events belonging to each linked token.
  // go from back to front so earlier splices do not shift parent positions.
  for (let i = positions.length - 1; i >= 0; i--) {
    ok(positions[i] !== undefined, 'expected `enter` index for linked token')
    position = positions[i]!

    /**
     * The list of child events within the range of the current linked token.
     *
     * @const {Event[]} bucket
     */
    const bucket: Event[] = []

    /**
     * The current linked token.
     *
     * @const {Token | undefined} linked
     */
    const linked: Token | undefined = events[position]![1]

    ok(linked, 'expected `linked` token')
    ok(linked.contentType, 'expected linked token with `contentType`')

    for (let j = childIndex; j >= 0; j--) {
      ok(child.events[j], 'expected `child.events[j]`')

      // stop grouping once the bucket is filled.
      if (group(child.events[j]!, linked, bucket, seen) === undefined) {
        childIndex = j
        break
      }
    }

    // insert child events into the parent stream.
    splice(events, position, 2, bucket)
  }

  // child events now exist in the parent stream.
  child.events = []
  return void child.events
}
