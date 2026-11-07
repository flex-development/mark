/**
 * @file Initialize - pattern
 * @module examples/splat/parse/initialize/pattern
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
import { constants, tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The initial pattern construct.
 *
 * @see {@linkcode InitialConstruct}
 *
 * @const {InitialConstruct} pattern
 */
const pattern: InitialConstruct = { tokenize: tokenizePattern }

export default pattern

/**
 * Tokenize an input pattern.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {State}
 *  The initial state
 */
function tokenizePattern(this: TokenizeContext, effects: Effects): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The current chunk token.
   *
   * @var {Token | undefined} chunk
   */
  let chunk: Token | undefined

  return check

  /**
   * Try constructs registered at the `pattern` content level.
   *
   * > 👉 **Note**: Constructs are checked before being attempted so chunks are
   * > not closed unless a construct can actually start at `code`.
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
      self.parser.constructs.pattern,
      attempt, // enter new content.
      eos(code) ? eat : chunk ? swallow : eat // start or continue a chunk.
    )(code)
  }

  /**
   * Attempt to enter pattern content after confirming it can start.
   *
   * Open chunks are closed before new content is captured.
   *
   * > 👉 **Note**: Chunks are closed here instead of before calls to
   * > {@linkcode effects.check} in {@linkcode check} because checks revert
   * > tokenizer events, but they do not revert local variables captured by the
   * > state machine.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function attempt(this: void, code: Code): State | undefined {
    if (chunk) dump()
    return effects.attempt(self.parser.constructs.pattern, check)(code)
  }

  /**
   * Try starting a new literal chunk.
   *
   * At end of stream, the current chunk is closed before the end-of-content
   * token is emitted.
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
      if (chunk) dump() // close the current chunk.

      // emit end of content.
      // this is the final event and token.
      effects.enter(tt.eoc)
      effects.consume(code)
      effects.exit(tt.eoc)

      return eat
    }

    // start a new literal container.
    effects.enter(tt.literal)

    // start a new chunk.
    chunk = effects.enter(tt.chunkLiteral, {
      contentType: constants.contentTypeLiteral
    })

    // consume the current code.
    return swallow(code)
  }

  /**
   * Add `code` to the current chunk and recheck constructs.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function swallow(this: void, code: Code): State | undefined {
    assert(chunk, 'expected current chunk')
    assert(!eos(code), 'did not expect end of stream')
    return effects.consume(code), check
  }

  /**
   * Close the current chunk.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function dump(this: void): undefined {
    assert(chunk, 'expected current chunk')
    chunk = undefined
    return effects.exit(tt.chunkLiteral), void effects.exit(tt.literal)
  }
}
