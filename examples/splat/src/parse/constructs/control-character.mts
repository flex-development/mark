/**
 * @file Constructs - controlCharacter
 * @module examples/splat/parse/constructs/controlCharacter
 */

import {
  asciiControl
} from '@flex-development/mark-util-character'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'

/**
 * The control character construct.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} controlCharacter
 */
const controlCharacter: Construct = { tokenize: tokenizeControlCharacter }

export default controlCharacter

/**
 * Tokenize a control character.
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
function tokenizeControlCharacter(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return maybeControlCharacter

  /**
   * At a control character.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeControlCharacter(this: void, code: Code): State | undefined {
    // not a control character.
    if (!asciiControl(code)) return nok(code)

    // capture the control character.
    effects.enter(tt.controlCharacter)
    effects.consume(code)
    effects.exit(tt.controlCharacter)

    return ok
  }
}
