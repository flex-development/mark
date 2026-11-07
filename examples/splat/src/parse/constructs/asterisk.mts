/**
 * @file Constructs - asterisk
 * @module examples/splat/parse/constructs/asterisk
 */

import { codes, ev } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  Event,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The asterisk (`*`) construct.
 *
 * A single asterisk matches any character zero (`0`) or more times, excluding
 * path separators.
 * They do *not* match directories or hidden files ('dotfiles') by default.
 *
 * Two consecutive asterisks occupying an entire segment, known as a globstar,
 * match any character zero (`0`) or more times, including path separators.
 * Runs of more than two consecutive asterisks are treated as a single asterisk;
 * thus, `a***` is equivalent to `a*`.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} asterisk
 */
const asterisk: Construct = {
  resolveAll: resolveAllAsterisk,
  tokenize: tokenizeAsterisk
}

export default asterisk

/**
 * Classify asterisk runs as globstars or wildcards.
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The current list of events
 * @return {Event[]}
 *  The list of changed events
 */
function resolveAllAsterisk(this: void, events: Event[]): Event[] {
  /**
   * The index of the current event.
   *
   * @var {number} index
   */
  let index: number = -1

  /**
   * The current segment.
   *
   * @var {Token<typeof tt.segment> | undefined} segment
   */
  let segment: Token<typeof tt.segment> | undefined

  while (++index < events.length) {
    assert(events[index], 'expected events[index]')
    const [event, token, self] = events[index]!

    // entering or exiting a segment.
    if (token.type === tt.segment) {
      segment = event === ev.enter ? token as typeof segment : undefined
    }

    // exiting an asterisk sequence.
    if (event === ev.exit && token.type === tt.asterisk) {
      /**
       * The value of the token.
       *
       * @const {string} value
       */
      const value: string = self.sliceSerialize(token)

      // a run of asterisks is considered a globstar only
      // when it contains exactly two asterisks and occupies an entire segment.
      if (value.length === 2) {
        /**
         * The next event.
         *
         * @const {Event | undefined} next
         */
        const next: Event | undefined = events[index + 1]

        /**
         * The event previous to the asterisk `enter` event.
         *
         * @const {Event | undefined} previous
         */
        const previous: Event | undefined = events[index - 2]

        // there should always be at least one event after this one.
        assert(next, 'expected `next` event')

        // the run occupies an entire segment.
        if (
          // explicit segment occupation.
          // the run is preceded by a separator exit event
          // and followed by the exit event for the current segment.
          (
            segment &&
            previous?.[0] === ev.exit &&
            previous[1].type === tt.separator &&
            next[1] === segment
          ) ||
          // implicit segment occupation.
          // the run is preceded by beginning of stream or a negation operator
          // and followed by end of stream or a new segment.
          (
            !segment &&
            next[0] === ev.enter &&
            (next[1].type === tt.segment || next[1].type === tt.eoc) &&
            (
              !previous ||
              previous[0] === ev.exit && previous[1].type === tt.patternNegation
            )
          )
        ) {
          token.globstar = true
          delete token.wildcard
          continue
        }
      }

      // one asterisk is always a wildcard.
      // a run with at least 2 asterisks at this point is also a wildcard.
      // outside a segment, all asterisk runs are considered wildcards.
      token.wildcard = true
      delete token.globstar
    }
  }

  return events
}

/**
 * Tokenize a sequence of asterisks.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeAsterisk(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  return atAsterisk

  /**
   * At an asterisk.
   *
   * @example
   *  ```markdown
   *  > | a*.mjs
   *       ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function atAsterisk(this: void, code: Code): State | undefined {
    assert(code === codes.asterisk, 'expected `codes.asterisk`')
    effects.enter(tt.asterisk, { globstar: undefined, wildcard: undefined })
    return effects.consume(code), afterAsterisk
  }

  /**
   * After an asterisk.
   *
   * @example
   *  ```markdown
   *  > | a*.mjs
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | a***.mjs
   *        ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterAsterisk(this: void, code: Code): State | undefined {
    if (code === codes.asterisk) return effects.consume(code), afterAsterisk
    return effects.exit(tt.asterisk), ok(code)
  }
}
