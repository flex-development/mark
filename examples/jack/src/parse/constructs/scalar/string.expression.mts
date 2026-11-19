/**
 * @file Constructs - stringExpression
 * @module examples/jack/parse/constructs/stringExpression
 */

import { constants, tt } from '@flex-development/jack/symbol'
import { eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  Marker,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * The string expression construct.
 *
 * @const {Construct} stringExpression
 */
const stringExpression: Construct = { tokenize: tokenizeStringExpression }

export default stringExpression

/**
 * Tokenize a string.
 *
 * @internal
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
function tokenizeStringExpression(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The number of consecutive backslashes immediately preceding the current
   * code.
   *
   * An odd-length run escapes a string marker.
   * The count is reset when a non-backslash character code is seen.
   *
   * @var {number} backslashes
   */
  let backslashes: number = 0

  /**
   * The opening string marker.
   *
   * @var {Marker} marker
   */
  let marker: Marker

  return startString

  /**
   * Start the expression.
   *
   * @example
   *  ```json
   *  ""
   *  ^
   *  ```
   *
   * @example
   *  ```jsonc
   *  "https://github.com/flex-development/docmark" // url
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  {
   *    url: 'https://github.com/flex-development/mark'
   *         ^
   *  }
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startString(this: void, code: Code): State | undefined {
    // cannot start.
    if (code !== codes.quotationMark && code !== codes.apostrophe) {
      return nok(code)
    }

    // enter the string expression.
    effects.enter(tt.stringExpression)

    // capture the opening marker.
    effects.enter(tt.stringMarker, { _open: true })
    effects.consume(code)
    effects.exit(tt.stringMarker)

    // signal string parsing.
    self.parser.skipComment = true
    marker = code

    return afterOpener
  }

  /**
   * After the opening string marker.
   *
   * @example
   *  ```json
   *  ""
   *   ^
   *  ```
   *
   * @example
   *  ```jsonc
   *  "https://github.com/flex-development/docmark" // url
   *   ^
   *  ```
   *
   * @example
   *  ```json5
   *  {
   *    url: 'https://github.com/flex-development/mark'
   *          ^
   *  }
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterOpener(this: void, code: Code): State | undefined {
    if (code === marker || eos(code)) return endString(code) // empty string.
    return startChunk(code) // start string content chunk.
  }

  /**
   * Start a `string` content chunk.
   *
   * @example
   *  ```jsonc
   *  "https://github.com/flex-development/docmark" // url
   *   ^
   *  ```
   *
   * @example
   *  ```json5
   *  {
   *    url: 'https://github.com/flex-development/mark'
   *          ^
   *  }
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startChunk(this: void, code: Code): State | undefined {
    effects.enter(tt.chunkString, { contentType: constants.contentTypeString })
    return insideString(code)
  }

  /**
   * Inside the `string` content chunk.
   *
   * @example
   *  ```jsonc
   *  "https://github.com/flex-development/docmark" // url
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   *  ```
   *
   * @example
   *  ```json5
   *  {
   *    url: 'https://github.com/flex-development/mark'
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   *  }
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideString(this: void, code: Code): State | undefined {
    if (eos(code)) {
      effects.exit(tt.chunkString)
      return endString(code)
    }

    /**
     * Whether the current code is escaped by an odd-length run of immediately
     * preceding backslashes.
     *
     * @const {boolean} escaped
     */
    const escaped: boolean = backslashes % 2 === 1

    // extend the current run of consecutive backslashes.
    if (code === codes.backslash) {
      backslashes++
      return effects.consume(code), insideString
    }

    // reset the consecutive backslash count.
    backslashes = 0

    // an unescaped marker ends the string.
    if (!escaped && code === marker) {
      effects.exit(tt.chunkString)
      return endString(code)
    }

    // add `code` to the current string content chunk.
    return effects.consume(code), insideString
  }

  /**
   * End the expression.
   *
   * @example
   *  ```json
   *    ""
   *     ^
   *  ```
   *
   * @example
   *  ```jsonc
   *  "https://github.com/flex-development/docmark" // url
   *                                              ^
   *  ```
   *
   * @example
   *  ```json5
   *  {
   *    url: 'https://github.com/flex-development/mark'
   *                                                  ^
   *  }
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endString(this: void, code: Code): State | undefined {
    delete self.parser.skipComment // remove string parsing signal.

    // at end of stream.
    if (eos(code)) {
      effects.exit(tt.stringExpression).malformed = true
      return ok(code)
    }

    // capture the final marker.
    effects.enter(tt.stringMarker, { _close: true })
    effects.consume(code)
    effects.exit(tt.stringMarker)

    // exit the string expression.
    effects.exit(tt.stringExpression)
    return ok
  }
}
