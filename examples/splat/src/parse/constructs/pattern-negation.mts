/**
 * @file Constructs - patternNegation
 * @module examples/splat/parse/constructs/patternNegation
 */

import { bos, eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Effects,
  NamedConstruct,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The pattern negation construct.
 *
 * @see {@linkcode NamedConstruct}
 *
 * @const {NamedConstruct} patternNegation
 */
const patternNegation: NamedConstruct = {
  name: tt.patternNegation,
  previous: bos,
  tokenize: tokenizePatternNegation
}

export default patternNegation

/**
 * Tokenize a pattern negation.
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
function tokenizePatternNegation(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return patternNegation

  /**
   * At a negation marker.
   *
   * @example
   *  ```markdown
   *  > | !dist/index.mjs
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
  function patternNegation(this: void, code: Code): State | undefined {
    assert(code === codes.exclamationMark, 'expected `codes.exclamationMark`')

    effects.enter(tt.patternNegation)
    effects.consume(code)
    effects.exit(tt.patternNegation)

    return afterMarker
  }

  /**
   * After a negation marker.
   *
   * @example
   *  ```markdown
   *  > | !
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | !dist/index.mjs
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
  function afterMarker(this: void, code: Code): State | undefined {
    return (eos(code) ? nok : ok)(code)
  }
}
