/**
 * @file Constructs - questionMark
 * @module examples/splat/parse/constructs/questionMark
 */

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
 * The question mark (`?`) construct.
 *
 * A single question mark matches any character exactly once.\
 * They do *not* match separators or leading dots.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} questionMark
 */
const questionMark: Construct = { tokenize: tokenizeQuestionMark }

export default questionMark

/**
 * Tokenize a question mark.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeQuestionMark(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  return atQuestionMark

  /**
   * At a question mark.
   *
   * @example
   *  ```markdown
   *  > | a?.mjs
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | ab?.mjs
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
  function atQuestionMark(this: void, code: Code): State | undefined {
    assert(code === codes.questionMark, 'expected `codes.questionMark`')

    effects.enter(tt.questionMark, { wildcard: true })
    effects.consume(code)
    effects.exit(tt.questionMark)

    return ok
  }
}
