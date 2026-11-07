/**
 * @file Constructs - segment
 * @module examples/splat/parse/constructs/segment
 */

import { eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  ContentType,
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { constants, tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The segment construct.
 *
 * A segment begins with a forward slash (`/`).
 * It ends when an unescaped forward slash is seen, or end of stream is reached.
 *
 * > 👉 **Note**: Like `micromatch`, `splat` only considers forward slashes
 * > (`/`) to be separators, even on windows, which is consistent with bash
 * > behavior.
 *
 * @see {@linkcode Construct}
 *
 * @const {Construct} segment
 */
const segment: Construct = { tokenize: tokenizeSegment }

export default segment

/**
 * Tokenize a pattern segment.
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
function tokenizeSegment(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  return startSegment

  /**
   * At the beginning of a segment.
   *
   * @example
   *  ```markdown
   *  > | src/**index.[cm]ts
   *         ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/{ast,compile,core,parse}/index.[cm]ts
   *         ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/{ast,compile,core,parse}/index.[cm]ts
   *                                  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startSegment(this: void, code: Code): State | undefined {
    assert(code === codes.slash, 'expected `codes.slash`')

    // start the segment.
    effects.enter(tt.segment)

    // consume the opening marker.
    effects.enter(tt.separator)
    effects.consume(code)
    effects.exit(tt.separator)

    // try capturing structured content.
    return beforeContent
  }

  /**
   * Before attempting structured content.
   *
   * @example
   *  ```markdown
   *  > | src//
   *          ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/*.[cm]ts
   *          ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/index.[cm]ts
   *          ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeContent(this: void, code: Code): State | undefined {
    if (code === codes.slash) return endSegment(code)
    return tryContent(code)
  }

  /**
   * Try constructs registered at the `segment` content level.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryContent(this: void, code: Code): State | undefined {
    return effects.attempt(
      self.parser.constructs.segment,
      beforeContent,
      beforeChunk
    )(code)
  }

  /**
   * Before starting a chunk.
   *
   * @example
   *  ```markdown
   *  > | src/**
   *            ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeChunk(this: void, code: Code): State | undefined {
    assert(code !== codes.slash, 'did not expect `codes.slash`')
    if (eos(code)) return endSegment(code)
    return startChunk(code)
  }

  /**
   * Start a new chunk.
   *
   * @example
   *  ```markdown
   *  > | src/*.[cm]ts
   *           ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/index.[cm]ts
   *          ^
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
    assert(code !== codes.slash, 'did not expect `codes.slash`')
    assert(!eos(code), 'did not expect end of stream')

    /**
     * The content type of the chunk.
     *
     * @const {ContentType} contentType
     */
    const contentType: ContentType = constants.contentTypeLiteral

    effects.enter(tt.literal)
    effects.enter(tt.chunkLiteral, { contentType })

    return insideChunk(code)
  }

  /**
   * Inside a chunk.
   *
   * @example
   *  ```markdown
   *  > | src/*.[cm]ts
   *           ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/*.[cm]ts
   *                ^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/index.[cm]ts
   *          ^^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/__tests__/*.spec.mts
   *          ^^^^^^^^^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideChunk(this: void, code: Code): State | undefined {
    // at the beginning of another segment or end of stream.
    if (code === codes.slash || eos(code)) {
      effects.exit(tt.chunkLiteral)
      effects.exit(tt.literal)
      return endSegment(code)
    }

    // add to chunk.
    return addToChunk(code)
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
  function addToChunk(this: void, code: Code): State | undefined {
    assert(code !== codes.slash, 'did not expect `codes.slash`')
    assert(!eos(code), 'did not expect end of stream')
    return effects.consume(code), checkContent
  }

  /**
   * Check constructs registered at the `segment` content level.
   *
   * @example
   *  ```markdown
   *  > | src/*.[cm]ts
   *            ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function checkContent(this: void, code: Code): State | undefined {
    return effects.check(
      self.parser.constructs.segment,
      moreContent,
      insideChunk
    )(code)
  }

  /**
   * Close the current chunk before capturing more structured content.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function moreContent(this: void, code: Code): State | undefined {
    effects.exit(tt.chunkLiteral)
    effects.exit(tt.literal)
    return tryContent(code)
  }

  /**
   * At the end of a segment.
   *
   * @example
   *  ```markdown
   *  > | src//
   *          ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/*.[cm]ts
   *                  ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/index.[cm]ts
   *                      ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/__tests__/*.spec.mts
   *                   ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endSegment(this: void, code: Code): State | undefined {
    effects.exit(tt.segment)
    return ok(code)
  }
}
