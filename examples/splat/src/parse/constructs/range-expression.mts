/**
 * @file Constructs - rangeExpression
 * @module examples/splat/parse/constructs/rangeExpression
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

/**
 * The range expression construct.
 *
 * Two (`2`) characters separated by a hyphen (`-`) denotes a range expression;
 * any character that falls between those two characters, inclusive, using the
 * current locale’s collating sequence and character set, matches.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} rangeExpression
 */
const rangeExpression: Construct = { tokenize: tokenizeRangeExpression }

export default rangeExpression

/**
 * Tokenize a range expression.
 *
 * > 👉 **Note**: Does **not** support escaped endpoints or markers.
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
function tokenizeRangeExpression(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startRangeExpression

  /**
   * At the beginning of a range expression.
   *
   * @example
   *  ```markdown
   *  > | [a-c]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [!x-z]
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
  function startRangeExpression(this: void, code: Code): State | undefined {
    effects.enter(tt.rangeExpression)
    return range(code)
  }

  /**
   * Try capturing the body of a range expression.
   *
   * @example
   *  ```markdown
   *  > | [a-c]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [!x-z]
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [abc]
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
  function range(this: void, code: Code): State | undefined {
    return factoryMarkers(effects, finishRangeExpression, nok, [
      { code: value, type: tt.rangeStart },
      { code: codes.dash },
      { code: value, type: tt.rangeEnd }
    ])(code)
  }

  /**
   * Finish the range expression.
   *
   * @example
   *  ```markdown
   *  > | [a-c]
   *          ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [!x-z]
   *           ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function finishRangeExpression(this: void, code: Code): State | undefined {
    effects.exit(tt.rangeExpression)
    return ok(code)
  }

  /**
   * Check if `code` represents a start or end value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {boolean}
   *  Whether `code` represents a start or end value
   */
  function value(this: void, code: Code): boolean {
    return !eos(code)
  }
}
