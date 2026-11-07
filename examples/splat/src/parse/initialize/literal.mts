/**
 * @file Initialize - literal
 * @module examples/splat/parse/initialize/literal
 */

import { eos } from '@flex-development/mark-util-character'
import type {
  Code,
  Effects,
  InitialConstruct,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The initial literal content construct.
 *
 * @see {@linkcode InitialConstruct}
 *
 * @const {InitialConstruct} literal
 */
const literal: InitialConstruct = { tokenize: tokenizeLiteral }

export default literal

/**
 * Tokenize literal content.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {State}
 *  The initial state
 */
function tokenizeLiteral(this: TokenizeContext, effects: Effects): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The current {@linkcode tt.data} token.
   *
   * A `data` token represents a sequence of `1` or more literal characters that
   * are not whitespace or line endings.
   *
   * @var {Token | undefined} data
   */
  let data: Token | undefined

  return check

  /**
   * Try constructs registered at the `literal` content level.
   *
   * > 👉 **Note**: Constructs are checked before being attempted so active data
   * > sequences are not exited unless a construct can actually start at `code`.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function check(this: void, code: Code): State | undefined {
    return effects.check(
      self.parser.constructs.literal,
      attempt, // enter data sequence.
      eos(code) ? eat : data ? swallow : eat // start or continue data sequence.
    )(code)
  }

  /**
   * Attempt to enter literal content after confirming it can start.
   *
   * Active data sequences are closed before new content is captured.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function attempt(this: void, code: Code): State | undefined {
    if (data) dump()
    return effects.attempt(self.parser.constructs.literal, check)(code)
  }

  /**
   * Try starting a new data sequence.
   *
   * At end of stream, the active data sequence is closed
   * before the end-of-content token is emitted.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function eat(this: void, code: Code): State | undefined {
    if (eos(code)) {
      if (data) dump() // close the current data sequence.

      // emit end of content.
      // this is the final event and token.
      effects.enter(tt.eoc)
      effects.consume(code)
      effects.exit(tt.eoc)

      return eat
    }

    // start a new data sequence and consume the current code.
    data = effects.enter(tt.data)
    return swallow(code)
  }

  /**
   * Add `code` to the current data sequence and recheck constructs.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function swallow(this: void, code: Code): State | undefined {
    assert(data, 'expected active data sequence')
    assert(!eos(code), 'did not expect end of stream')
    return effects.consume(code), check
  }

  /**
   * Close the current data sequence.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function dump(this: void): undefined {
    assert(data, 'expected active data sequence')
    return data = undefined, void effects.exit(tt.data)
  }
}
