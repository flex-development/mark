/**
 * @file Constructs - whitespace
 * @module examples/splat/parse/constructs/whitespace
 */

import factorySpace from '@flex-development/mark-factory-space'
import { unicodeWhitespace } from '@flex-development/mark-util-character'
import type {
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'

/**
 * The whitespace construct.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} whitespace
 */
const whitespace: Construct = { tokenize: tokenizeWhitespace }

export default whitespace

/**
 * Tokenize whitespace.
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
function tokenizeWhitespace(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return factorySpace(effects, ok, {
    nok,
    test: unicodeWhitespace,
    type: tt.whitespace
  })
}
