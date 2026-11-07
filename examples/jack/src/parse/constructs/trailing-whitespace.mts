/**
 * @file Constructs - trailingWhitespace
 * @module examples/jack/parse/constructs/trailingWhitespace
 */

import { tt } from '@flex-development/jack/symbol'
import { factorySpace } from '@flex-development/mark-factory-space'
import { eol, eos, whitespace } from '@flex-development/mark-util-character'
import type {
  Code,
  Effects,
  PartialConstruct,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * The trailing whitespace construct.
 *
 * Trailing whitespace may be seen at the end of a line.
 *
 * > 👉 **Note**: Blank lines are expected to already be parsed.\
 * > The construct does not check for blank lines before parse attempts.
 *
 * @const {PartialConstruct} trailingWhitespace
 */
const trailingWhitespace: PartialConstruct = {
  partial: true,
  tokenize: tokenizeTrailingWhitespace
}

export default trailingWhitespace

/**
 * Tokenize trailing whitespace.
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
function tokenizeTrailingWhitespace(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startWhitespaceTrail

  /**
   * Attempt to begin trailing whitespace.
   *
   * > 👉 **Note**: `␊` represents a line ending and `␠` represents a space.
   *
   * @example
   *  ```markdown
   *  > | The tokenization context.␠␠␠␊
   *                               ^
   *  > |␠␊
   *  > | @const {TokenizeContext} self␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startWhitespaceTrail(this: void, code: Code): State | undefined {
    return factorySpace(effects, afterWhitespaceTrail, {
      fields: { _trailing: true },
      nok,
      test: whitespace,
      type: tt.whitespace
    })(code)
  }

  /**
   * Finish trailing whitespace.
   *
   * Trailing whitespace is recognized only when the consumed whitespace is
   * immediately followed by a line ending or end of stream.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterWhitespaceTrail(this: void, code: Code): State | undefined {
    // capture line ending.
    if (eol(code)) {
      effects.enter(tt.lineEnding)
      effects.consume(code)
      effects.exit(tt.lineEnding)
      return ok
    }

    if (eos(code)) return ok(code) // at end of stream.
    return nok(code)
  }
}
