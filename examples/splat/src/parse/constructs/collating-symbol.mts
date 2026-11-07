/**
 * @file Constructs - collatingSymbol
 * @module examples/splat/parse/constructs/collatingSymbol
 */

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
 * The collating symbol construct.
 *
 * Within a bracket expression, *collating symbols* can be specified using the
 * syntax *`[.symbol.]`*, which matches the collating symbol *symbol*.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} collatingSymbol
 */
const collatingSymbol: Construct = { tokenize: tokenizeCollatingSymbol }

export default collatingSymbol

/**
 * Tokenize a collating symbol.
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
function tokenizeCollatingSymbol(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * Whether a value has been seen inside the collating symbol.
   *
   * This prevents:
   *
   * ```markdown
   * > | [..]
   * ```
   *
   * from being treated as a valid collating symbol, while allowing:
   *
   * ```markdown
   * > | [...]
   * ```
   *
   * where `.` is the collating symbol value.
   *
   * @var {boolean} valueSeen
   */
  let valueSeen: boolean = false

  return startCollatingSymbol

  /**
   * At the beginning of a collating symbol.
   *
   * @example
   *  ```markdown
   *  > | [.ch.]
   *      ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [...]
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
  function startCollatingSymbol(this: void, code: Code): State | undefined {
    assert(
      code === codes.leftSquareBracket,
      'expected `codes.leftSquareBracket`'
    )

    effects.enter(tt.collatingSymbol)
    effects.consume(code)

    return afterOpener
  }

  /**
   * After the opening marker.
   *
   * @example
   *  ```markdown
   *  > | [.ch.]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [...]
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
  function afterOpener(this: void, code: Code): State | undefined {
    if (code === codes.dot) {
      effects.consume(code) // consume the symbol value marker.
      effects.enter(tt.collatingSymbolValue) // start new symbol value.
      return insideValue
    }

    // cannot start symbol value.
    return nok(code)
  }

  /**
   * Inside the symbol value.
   *
   * @example
   *  ```markdown
   *  > | [.ch.]
   *        ^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [...]
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
  function insideValue(this: void, code: Code): State | undefined {
    // at end of stream.
    if (eos(code)) return nok(code)

    // end the symbol value.
    if (code === codes.dot && valueSeen) {
      effects.exit(tt.collatingSymbolValue)
      effects.consume(code)
      return maybeCloser
    }

    // continue the symbol value.
    return valueSeen = true, effects.consume(code), insideValue
  }

  /**
   * After the closing symbol value marker.
   *
   * @example
   *  ```markdown
   *  > | [.ch.]
   *           ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [...]
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
  function maybeCloser(this: void, code: Code): State | undefined {
    if (code !== codes.rightSquareBracket) return nok(code) // malformed symbol.

    // consume the closing symbol marker and finish the collating symbol.
    return effects.consume(code), effects.exit(tt.collatingSymbol), ok
  }
}
