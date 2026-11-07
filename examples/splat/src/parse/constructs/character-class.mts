/**
 * @file Constructs - characterClass
 * @module examples/splat/parse/constructs/characterClass
 */

import { asciiAlpha } from '@flex-development/mark-util-character'
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
 * The character class construct.
 *
 * Within a bracket expression, *character classes* can be specified using the
 * syntax `[:class:]`, where `class` is one of the following classes defined in
 * the POSIX standard:
 *
 * - `alnum`
 * - `alpha`
 * - `ascii`
 * - `blank`
 * - `cntrl`
 * - `digit`
 * - `graph`
 * - `lower`
 * - `print`
 * - `punct`
 * - `space`
 * - `upper`
 * - `word`
 * - `xdigit`
 *
 * ...or a custom class value.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} characterClass
 */
const characterClass: Construct = { tokenize: tokenizeCharacterClass }

export default characterClass

/**
 * Tokenize a character class.
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
function tokenizeCharacterClass(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  return startCharacterClass

  /**
   * At the beginning of a character class.
   *
   * @example
   *  ```markdown
   *  > | [[:alpha:]]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                  ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                                ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startCharacterClass(this: void, code: Code): State | undefined {
    assert(
      code === codes.leftSquareBracket,
      'expected `codes.leftSquareBracket`'
    )

    effects.enter(tt.characterClass)
    effects.consume(code)

    return afterOpener
  }

  /**
   * After the opening class marker.
   *
   * @example
   *  ```markdown
   *  > | [[:alpha:]]
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                   ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                                 ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterOpener(this: void, code: Code): State | undefined {
    // no opening value marker.
    if (code !== codes.colon) return nok(code)

    // swallow the opening value marker.
    effects.consume(code)

    // try starting the class value.
    return beforeValue
  }

  /**
   * Before a class value.
   *
   * @example
   *  ```markdown
   *  > | [[:alpha:]]
   *         ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *         ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                    ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                                  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeValue(this: void, code: Code): State | undefined {
    effects.enter(tt.characterClassValue)
    return insideValue(code)
  }

  /**
   * Inside the class value.
   *
   * @example
   *  ```markdown
   *  > | [[:alpha:]]
   *         ^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:alpha:]]
   *         ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *         ^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                    ^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                                  ^^^^^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideValue(this: void, code: Code): State | undefined {
    // exit value and capture the closing value marker.
    // try capturing the closing class marker afterwards.
    if (code === codes.colon && self.previous !== code) {
      effects.exit(tt.characterClassValue)
      effects.consume(code)
      return maybeCloser
    }

    // continue the class value.
    if (asciiAlpha(code)) return effects.consume(code), insideValue

    // class value cannot continue.
    return nok(code)
  }

  /**
   * After the closing value marker.
   *
   * @example
   *  ```markdown
   *  > | [[:alpha:]]
   *               ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *               ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                          ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [[:space:]][[:upper:]!].[-[:lower:]]
   *                                        ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeCloser(this: void, code: Code): State | undefined {
    if (code !== codes.rightSquareBracket) return nok(code) // malformed class.

    // swallow the closing class marker.
    effects.consume(code)

    // finish the character class.
    effects.exit(tt.characterClass)
    return ok
  }
}
