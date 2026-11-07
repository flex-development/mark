/**
 * @file Constructs - escape
 * @module examples/splat/parse/constructs/escape
 */

import factoryMarkers from '@flex-development/mark-factory-markers'
import { eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The escape sequence construct.
 *
 * > 👉 **Note**: Like `micromatch`, `splat` exclusively and explicitly reserves
 * > backslashes for escaping characters in a glob pattern, even on windows,
 * > which is consistent with bash behavior.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} escape
 */
const escape: Construct = { tokenize: tokenizeEscape }

export default escape

/**
 * Tokenize an escape sequence.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeEscape(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startEscape

  /**
   * At the beginning of an escape sequence.
   *
   * @example
   *  ```markdown
   *  > | \*
   *      ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/\*.mts
   *          ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startEscape(this: void, code: Code): State | undefined {
    assert(code === codes.backslash, 'expected `codes.backslash`')
    effects.enter(tt.escape)
    return escape(code)
  }

  /**
   * Try capturing an escape sequence.
   *
   * @example
   *  ```markdown
   *  > | \*
   *      ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/\*.mts
   *          ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function escape(this: void, code: Code): State | undefined {
    return factoryMarkers(effects, finishEscape, nok, [
      {
        code: codes.backslash,
        type: tt.escapeMarker
      },
      {
        /**
         * Check if `code` can follow an escape sequence marker.
         *
         * @this {void}
         *
         * @param {Code} code
         *  The current character code
         * @return {boolean}
         *  Whether `code` can follow an escape sequence marker
         */
        code(this: void, code: Code): boolean {
          return !eos(code)
        },
        type: tt.escapeValue
      }
    ])(code)
  }

  /**
   * Finish the escape sequence.
   *
   * @example
   *  ```markdown
   *  > | \*
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/\*.mts
   *            ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function finishEscape(this: void, code: Code): State | undefined {
    effects.exit(tt.escape)
    return ok(code)
  }
}
