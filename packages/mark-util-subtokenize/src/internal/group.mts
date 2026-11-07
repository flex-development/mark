/**
 * @file Internal - group
 * @module mark-util-subtokenize/internal/group
 */

import { ev } from '@flex-development/mark-util-symbol'
import type { Event, Token } from '@flex-development/mark/parse'
import { ok } from 'devlop'
import fixLineEnding from './fix-line-ending.mts'

export default group

/**
 * Determine if `child` fits into `bucket`.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Event} child
 *  The current child event
 * @param {Token} linked
 *  The current linked token
 * @param {Event[]} bucket
 *  The list of child events within the range of the current `linked` token
 * @param {WeakSet<Token>} seen
 *  The list of child tokens that have already been seen
 * @return {number | undefined}
 *  The current `bucket` length or `undefined` if `bucket` is filled
 */
function group(
  this: void,
  child: Event,
  linked: Token,
  bucket: Event[],
  seen: WeakSet<Token>
): number | undefined {
  const [event, token, self] = child

  // entering or exiting a token that starts and ends on the same line.
  if (token.start.line === token.end.line) {
    // child token belongs to a different bucket.
    // token was produced from a chunk without a line ending.
    // this can happen when a single line is split into multiple chunks.
    if (token.start.offset < linked.start.offset) return void child

    // mark token as seen and add child event to bucket.
    seen.add(token)
    return bucket.unshift(child)
  }

  // at a line ending.
  if (
    token.start._bufferIndex < 0 &&
    token.end._bufferIndex < 0 &&
    token.end.offset !== token.start.offset
  ) {
    // line ending already added to bucket.
    if (seen.has(token)) {
      ok(event === ev.enter, 'expected line ending `enter` event')
      return bucket.unshift(child)
    }

    // fix end point.
    // tokens representing line endings should end at column `1`,
    // but may not when the token is closed after `defineSkip` is called
    // and a skip is applied.
    fixLineEnding(self.sliceStream, token)

    // we move from back to front.
    ok(event === ev.exit, 'expected line ending `exit` event')

    // exiting a line ending.
    // the line ending may or may not belong to the current linked token.
    // the linked token represents a blank or non-blank line.
  }

  // exiting a token that spans multiple lines.
  if (event === ev.exit) {
    // child token belongs to a different linked token.
    if (
      // token ends before the linked token starts...
      token.end.offset <= linked.start.offset ||
      // ...or after the linked token ends.
      token.end.offset > linked.end.offset
    ) {
      return void child
    }

    // child token belongs to the current linked token.
    // the token ends before or at linked token's end.
    seen.add(token) // mark token as seen.
    return bucket.unshift(child) // add to bucket.
  }

  // entering a multiline token.
  ok(seen.has(token), 'expected to have seen multiline `token`')
  return bucket.unshift(child)
}
