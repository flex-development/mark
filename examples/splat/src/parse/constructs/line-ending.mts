/**
 * @file Constructs - lineEnding
 * @module examples/splat/parse/constructs/lineEnding
 */

import { eol } from '@flex-development/mark-util-character'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'

/**
 * The line ending construct.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} lineEnding
 */
const lineEnding: Construct = { tokenize: tokenizeLineEnding }

export default lineEnding

/**
 * Tokenize a line ending.
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
function tokenizeLineEnding(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return maybeLineEnding

  /**
   * At a line ending.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > | hello␊
   *           ^
   *  > | world
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeLineEnding(this: void, code: Code): State | undefined {
    // not a line ending.
    if (!eol(code)) return nok(code)

    // capture the line ending.
    effects.enter(tt.lineEnding)
    effects.consume(code)
    effects.exit(tt.lineEnding)

    return ok
  }
}
