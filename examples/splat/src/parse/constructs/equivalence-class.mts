/**
 * @file Constructs - equivalenceClass
 * @module examples/splat/parse/constructs/equivalenceClass
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
 * The equivalence class construct.
 *
 * Within a bracket expression, *equivalence classes* can be specified using the
 * syntax *`[=c=]`*, which matches all characters with the same collation weight
 * (as defined by the current locale) as the character *c*.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} equivalenceClass
 */
const equivalenceClass: Construct = { tokenize: tokenizeEquivalenceClass }

export default equivalenceClass

/**
 * Tokenize an equivalence class.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The state machine context
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeEquivalenceClass(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startEquivalenceClass

  /**
   * At the beginning of an equivalence class.
   *
   * @example
   *  ```markdown
   *  > | [=a=]
   *      ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startEquivalenceClass(this: void, code: Code): State | undefined {
    return effects.enter(tt.equivalenceClass), equivalence(code)
  }

  /**
   * Try capturing the equivalence class.
   *
   * @example
   *  ```markdown
   *  > | [=a=]
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
  function equivalence(this: void, code: Code): State | undefined {
    return factoryMarkers(effects, finishClass, nok, [
      codes.leftSquareBracket,
      codes.equalsTo,
      {
        /**
         * Check if `code` can represent a class value.
         *
         * @this {void}
         *
         * @param {Code} code
         *  The code to check
         * @return {boolean}
         *  Whether `code` can represent a class value
         */
        code(this: void, code: Code): boolean {
          return !eos(code)
        },
        type: tt.equivalenceClassValue
      },
      codes.equalsTo,
      codes.rightSquareBracket
    ])(code)
  }

  /**
   * Finish the equivalence class.
   *
   * @example
   *  ```markdown
   *  > | [=a=]
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
  function finishClass(this: void, code: Code): State | undefined {
    effects.exit(tt.equivalenceClass)
    return ok(code)
  }
}
