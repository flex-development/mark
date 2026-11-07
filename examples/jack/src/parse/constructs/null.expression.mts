/**
 * @file Constructs - nullExpression
 * @module examples/jack/parse/constructs/nullExpression
 */

import { tt } from '@flex-development/jack/symbol'
import {
  factoryMarkers,
  fromString
} from '@flex-development/mark-factory-markers'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * The `null` expression construct.
 *
 * @const {Construct} nullExpression
 */
const nullExpression: Construct = { tokenize: tokenizeNullExpression }

export default nullExpression

/**
 * Tokenize the value `null`.
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
function tokenizeNullExpression(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startNull

  /**
   * Start a `null` expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startNull(this: void, code: Code): State | undefined {
    effects.enter(tt.nullExpression)
    return tryNull(code)
  }

  /**
   * Try capturing the value `null`.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryNull(this: void, code: Code): State | undefined {
    return factoryMarkers(effects, endNull, nok, fromString('null'))(code)
  }

  /**
   * End the `null` expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endNull(this: void, code: Code): State | undefined {
    return effects.exit(tt.nullExpression), ok(code)
  }
}
