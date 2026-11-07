/**
 * @file Constructs - booleanExpression
 * @module examples/jack/parse/constructs/booleanExpression
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
 * The boolean expression construct.
 *
 * @const {Construct} booleanExpression
 */
const booleanExpression: Construct = { tokenize: tokenizeBooleanExpression }

export default booleanExpression

/**
 * Tokenize a boolean expression.
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
function tokenizeBooleanExpression(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startBoolean

  /**
   * Start a boolean expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startBoolean(this: void, code: Code): State | undefined {
    effects.enter(tt.booleanExpression)
    return tryFalse(code)
  }

  /**
   * Try capturing the value `false`.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryFalse(this: void, code: Code): State | undefined {
    return factoryMarkers(
      effects,
      endBoolean,
      tryTrue,
      fromString('false')
    )(code)
  }

  /**
   * Try capturing the value `true`.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryTrue(this: void, code: Code): State | undefined {
    return factoryMarkers(effects, endBoolean, nok, fromString('true'))(code)
  }

  /**
   * End a boolean expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endBoolean(this: void, code: Code): State | undefined {
    return effects.exit(tt.booleanExpression), ok(code)
  }
}
