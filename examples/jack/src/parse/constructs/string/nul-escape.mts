/**
 * @file Constructs - nulEscape
 * @module examples/jack/parse/constructs/nulEscape
 */

import { tt } from '@flex-development/jack/symbol'
import { asciiDigit } from '@flex-development/mark-util-character'
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
 * The `nul` escape sequence construct.
 *
 * @const {Construct} nulEscape
 */
const nulEscape: Construct = { tokenize: tokenizeNulEscape }

export default nulEscape

/**
 * Tokenize a `nul` escape sequence.
 *
 * @internal
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
function tokenizeNulEscape(
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

    // start the nul escape.
    effects.enter(tt.nulEscape)

    // capture the escape marker.
    effects.enter(tt.escapeMarker)
    effects.consume(code)
    effects.exit(tt.escapeMarker)

    return zero
  }

  /**
   * After the escape marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function zero(this: void, code: Code): State | undefined {
    // the escape value of a `nul` escape sequence must be `0`.
    if (code !== codes.digit0) return nok(code)

    // capture the nul escape value.
    effects.enter(tt.nulEscapeValue)
    effects.consume(code)
    effects.exit(tt.nulEscapeValue)

    // ensure a digit does not follow the escape value.
    return afterZero
  }

  /**
   * After the escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterZero(this: void, code: Code): State | undefined {
    if (asciiDigit(code)) return nok(code) // digit not allowed here.
    effects.exit(tt.nulEscape) // finish the escape sequence.
    return ok(code) // delegate back to the `language` initializer.
  }
}
