/**
 * @file Constructs - lineComment
 * @module examples/jack/parse/constructs/lineComment
 */

import { constants, tt } from '@flex-development/jack/symbol'
import { factoryMarkers } from '@flex-development/mark-factory-markers'
import { factorySpace } from '@flex-development/mark-factory-space'
import { eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  ContinuableConstruct,
  Effects,
  MarkerSequence,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

/**
 * The line comment construct.
 *
 * @const {ContinuableConstruct} lineComment
 */
const lineComment: ContinuableConstruct = {
  continuation: { tokenize: tokenizeLineCommentContinuation },
  exit: exitLineComment,
  tokenize: tokenizeLineComment
}

export default lineComment

/**
 * The line markers configuration.
 *
 * @const {MarkerSequence} markers
 */
const markers: MarkerSequence = [
  { code: codes.slash, fields: { _open: true } },
  { code: codes.slash, fields: { _close: true } }
]

/**
 * Exit the comment container.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {undefined}
 */
function exitLineComment(this: TokenizeContext, effects: Effects): undefined {
  assert(this.containerState, 'expected `containerState` inside comment')
  return void effects.exit(tt.comment)
}

/**
 * Tokenize the current line of a line comment.
 *
 * The first line opens the comment container before capturing the comment
 * line prefix.\
 * Continued lines reuse this tokenizer through the continuation construct.
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
function tokenizeLineComment(
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

  return startComment

  /**
   * Attempt to begin or continue a line comment.
   *
   * The comment container is opened when it is not already open.
   * Continued lines reuse this state through the continuation construct.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |// continuation construct did not consume entire line.␊
   *     ^
   *  > |// start markdown chunk from current point in the stream.␊
   *  > |if (!eol(self.previous)) return beforeMarkdown(code)␊
   *  ```
   *
   * @example
   *  ```markdown
   *  > |// continuation construct did not consume entire line.␊
   *  > |// start markdown chunk from current point in the stream.␊
   *     ^
   *  > |if (!eol(self.previous)) return beforeMarkdown(code)␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startComment(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')

    // open the comment container if not already open.
    if (!self.containerState.open) {
      // line comment not allowed at the current position.
      if (self.parser.skipComment) return nok(code)

      // start new comment.
      effects.enter(tt.comment)

      // the comment container is fresh.
      // markers are captured inside a `commentOpener` token.
      effects.enter(tt.commentOpener)

      // try capturing comment markers.
      return factoryMarkers(effects, endOpener, nok, markers)(code)
    }

    /**
     * Capture optional padding after markers.
     *
     * @const {State} afterMarkers
     */
    const afterMarkers: State = factorySpace(
      effects,
      endPrefix,
      tt.commentPadding,
      constants.commentPaddingSizeMin
    )

    // try capturing comment line markers.
    return factoryMarkers(effects, afterMarkers, nok, [
      { code: codes.slash, fields: { _open: true } },
      { code: codes.slash, fields: { _close: true } }
    ])(code)
  }

  /**
   * After the opening set of comment line markers.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |//cannot be a line comment.␊
   *       ^
   *  > |if (code !== self.previous) return nok(code)
   *  ```
   *
   * @example
   *  ```markdown
   *  > |// continuation construct did not consume entire line.␊
   *      ^
   *  > |// start markdown chunk from current point in the stream.␊
   *  > |if (!eol(self.previous)) return beforeMarkdown(code)␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endOpener(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')

    /**
     * The comment opener token.
     *
     * @const {Token} tail
     */
    const tail: Token = effects.exit(tt.commentOpener)

    // propagate comment opener token and width to container state.
    self.containerState.opener = tail
    self.containerState.openerWidth = tail.end.column - tail.start.column

    // mark the comment container as open.
    self.containerState.open = true

    // capture optional padding following the opener.
    // **note**: padding is captured ***outside*** the opener,
    // as opposed to inside like `commentLinePrefix` tokens.
    return factorySpace(
      effects,
      ok,
      tt.commentPadding,
      constants.commentPaddingSizeMin
    )(code)
  }

  /**
   * At the end of the comment line prefix.
   *
   * The comment line prefix contains leading comment padding, continuation
   * line markers, and optional inner comment padding.\
   * It ends immediately before comment content.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |// continuation construct did not consume entire line.␊
   *  > |// start markdown chunk from current point in the stream.␊
   *        ^
   *  > |if (!eol(self.previous)) return beforeMarkdown(code)␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endPrefix(this: void, code: Code): State | undefined {
    effects.exit(tt.commentLinePrefix)
    return ok(code)
  }
}

/**
 * Continue tokenizing a line comment.
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
function tokenizeLineCommentContinuation(
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

  return lineStart

  /**
   * Begin a continued comment line.
   *
   * Leading comment padding is captured before attempting line markers.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |// the comment container is open.␊
   *  > |// markers are captured inside a `commentLinePrefix` token.␊
   *     ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |   // continuation construct did not consume entire line.␊
   *  > |   // start markdown chunk from current point in the stream.␊
   *     ^
   *  > |   if (!eol(self.previous)) return beforeMarkdown(code)␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function lineStart(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')
    assert(self.containerState.opener, 'expected comment `opener` token')
    assert(!eos(code), 'did not expect end of stream')

    // begin comment line prefix.
    effects.enter(tt.commentLinePrefix)

    // capture leading comment padding, then try capturing markers.
    return factorySpace(effects, afterLeadingPadding, tt.commentPadding)(code)
  }

  /**
   * Attempt to tokenize comment line markers after capturing leading padding.
   *
   * The {@linkcode lineComment} construct is attempted from the current point
   * in the stream.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |// the comment container is open.␊
   *  > |// markers are captured inside a `commentLinePrefix` token.␊
   *     ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |   // continuation construct did not consume entire line.␊
   *  > |   // start comment chunk from current point in the stream.␊
   *        ^
   *  > |   if (!eol(self.previous)) return beforeMarkdown(code)␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterLeadingPadding(this: void, code: Code): State | undefined {
    // use `lineComment` to finish out the continuation attempt.
    // the markers established by `markers` will be used.
    // success means this line is marked and continues the active comment.
    // failure means this line is not a marked or continued line.
    return effects.attempt(lineComment, ok, nok)(code)
  }
}
