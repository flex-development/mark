/**
 * @file Constructs - characterEscape
 * @module examples/jack/parse/constructs/characterEscape
 */

import { tt } from '@flex-development/jack/symbol'
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
import { ok as assert } from 'devlop'

/**
 * The character escape sequence construct.
 *
 * @const {Construct} characterEscape
 */
const characterEscape: Construct = { tokenize: tokenizeCharacterEscape }

export default characterEscape

/**
 * Tokenize a character escape sequence.
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
function tokenizeCharacterEscape(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startEscape

  /**
   * Start the escape sequence.
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

    // enter the character escape.
    effects.enter(tt.characterEscape)

    // try capturing the escape marker and value.
    return factoryMarkers(effects, afterEscapeValue, nok, [
      { code, type: tt.escapeMarker },
      { code: value, type: tt.characterEscapeValue }
    ])(code)
  }

  /**
   * After the escape sequence value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterEscapeValue(this: void, code: Code): State | undefined {
    effects.exit(tt.characterEscape) // finish the character escape.
    return ok(code) // delegate back to the `language` initializer.
  }

  /**
   * Check if `code` represents an escape sequence value.
   *
   * @this {void}
   *
   * @param {unknown} code
   *  The current character code
   * @return {boolean}
   *  Whether `code` represents an escape value
   */
  function value(this: void, code: unknown): boolean {
    return !eos(code)
  }
}
