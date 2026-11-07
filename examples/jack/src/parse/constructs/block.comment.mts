/**
 * @file Constructs - blockComment
 * @module examples/jack/parse/constructs/blockComment
 */

import { constants, tt } from '@flex-development/jack/symbol'
import { factoryMarkers } from '@flex-development/mark-factory-markers'
import { factorySpace } from '@flex-development/mark-factory-space'
import { eol, eos, whitespace } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  ContinuableConstruct,
  Effects,
  PartialConstruct,
  Place,
  Position,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'
import blankLine from './blank-line.mts'
import trailingWhitespace from './trailing-whitespace.mts'

/**
 * The block comment construct.
 *
 * @const {ContinuableConstruct} blockComment
 */
const blockComment: ContinuableConstruct = {
  continuation: { tokenize: tokenizeBlockCommentContinuation },
  exit: exitBlockComment,
  tokenize: tokenizeBlockComment
}

export default blockComment

/**
 * The comment opener construct.
 *
 * A comment opener begins a block comment.
 *
 * Whitespace following the marker may be recognized separately as comment
 * padding or, when it reaches the end of the line, as trailing whitespace.
 *
 * @const {PartialConstruct} commentOpener
 */
const commentOpener: PartialConstruct = {
  partial: true,
  tokenize: tokenizeCommentOpener
}

/**
 * The comment closer construct.
 *
 * A comment closer ends a block comment.
 *
 * One whitespace character preceding the closer may be recognized separately
 * as comment padding.
 *
 * @const {PartialConstruct} commentCloser
 */
const commentCloser: PartialConstruct = {
  partial: true,
  tokenize: tokenizeCommentCloser
}

/**
 * The trailing comment closer construct.
 *
 * A trailing comment closer consists of whitespace followed by a comment
 * closer.
 *
 * @const {PartialConstruct} trailingCommentCloser
 */
const trailingCommentCloser: PartialConstruct = {
  partial: true,
  tokenize: tokenizeTrailingCommentCloser
}

/**
 * The default comment line prefix construct.
 *
 * A default comment line prefix may contain leading comment padding, a single
 * comment line marker, and optional inner padding following the marker.
 *
 * The prefix may also consist only of leading comment padding when the next
 * input begins the comment closer.
 *
 * @const {PartialConstruct} commentLinePrefix
 */
const commentLinePrefix: PartialConstruct = {
  partial: true,
  previous: eol,
  tokenize: tokenizeCommentLinePrefix
}

/**
 * The padding-only comment line prefix construct.
 *
 * Unlike the default {@linkcode commentLinePrefix} construct, leading comment
 * padding is calculated based on the current comment opener's `end` column.
 *
 * @const {PartialConstruct} commentLinePrefixPadded
 */
const commentLinePrefixPadded: PartialConstruct = {
  partial: true,
  previous: eol,
  tokenize: tokenizeCommentLinePrefixPadded
}

/**
 * Exit the comment container.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {undefined}
 */
function exitBlockComment(
  this: TokenizeContext,
  effects: Effects
): undefined {
  return void effects.exit(tt.comment)
}

/**
 * Tokenize the first line of a block comment.
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
function tokenizeBlockComment(
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
   * Attempt to begin a block comment.
   *
   * The comment container is entered before the opener is attempted.
   * If the opener fails, the construct fails.
   * This is the only failure point.
   *
   * @example
   *  ```markdown
   *  > |/*
   *     ^
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
    // block comment not allowed at the current position.
    if (self.parser.skipComment) return nok(code)

    // start a new block comment.
    effects.enter(tt.comment)

    // try capturing the comment opener.
    // if successful, finish out the line.
    // otherwise, fail and delegate to the `source` initializer.
    return effects.attempt(commentOpener, afterOpener, nok)(code)
  }

  /**
   * Continue after a comment opener.
   *
   * The comment may end immediately, continue onto the next line, or begin a
   * comment chunk on the current line.
   *
   * A possible closer is attempted before ordinary comment content so empty
   * comments can terminate without producing a chunk.
   *
   * > 👉 **Note**: `␊` represents a line ending, `␠` represents a space,
   * > and `ᴺᵁᴸ` represents end-of-stream.
   *
   * @example
   *  ```markdown
   *  > |/*ᴺᵁᴸ
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/*␠␠␠␊
   *  > | * @file factoryBlockComment
   *     ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/*␠␠*\/
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/*␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠*\/
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/*␠␠@type {State}␠␠*\/
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**\/
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/***note**: starts at `0` to skip the first event.*\/
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/*Handle events coming from `tokenize`*\/
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
  function afterOpener(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')

    // comment terminated by end of stream.
    if (eos(code)) return ok(code)

    // the `commentOpener` construct captured trailing whitespace.
    // the entirety of the first line has been consumed.
    // `tokenizeBlockCommentContinuation` will take over from here.
    if (eol(self.previous)) return ok(code)

    // capture line ending.
    // the comment container is still open.
    // `tokenizeBlockCommentContinuation` will take over from here.
    // if line ending is handled by markdown tokenizers, it will be considered
    // a blank line even though the comment opener is on this line.
    if (eol(code)) {
      effects.enter(tt.lineEnding)
      effects.consume(code)
      effects.exit(tt.lineEnding)
      return ok
    }

    // check for comment closer sequence before starting chunk.
    // on failure, capture any whitespace so its not considered a line prefix.
    if (whitespace(code)) {
      return effects.attempt(
        commentCloser,
        closeComment,
        // try finishing a whitespace-only comment.
        // on success, mark comment container for closure.
        // otherwise, capture arbitrary whitespace before starting chunk.
        effects.attempt(
          trailingCommentCloser,
          closeComment,
          effects.check(
            trailingWhitespace,
            ok,
            factorySpace(effects, startChunk, tt.whitespace)
          )
        )
      )(code)
    }

    // check for comment closer before starting first chunk.
    // if closer cannot start, the chunk starts on the same line as opener.
    return effects.attempt(commentCloser, closeComment, startChunk)(code)
  }

  /**
   * Start the first comment chunk.
   *
   * The first chunk begins on the same line as the comment opener.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startChunk(this: void, code: Code): State | undefined {
    assert(!eos(code), 'did not expect end of stream')

    // start new comment chunk on same line as opener.
    effects.enter(tt.chunkComment, {
      contentType: constants.contentTypeComment
    })

    return insideChunk(code)
  }

  /**
   * Continue the first comment chunk.
   *
   * Content is consumed through the end of the current line.
   * A possible closer is checked before {@linkcode fm.closer} or a whitespace
   * is committed to the chunk.
   *
   * At a line ending, the chunk is closed.
   * Later lines are handled by {@linkcode tokenizeBlockCommentContinuation}.
   *
   * > 👉 **Note**: `␊` represents a line ending
   * > and `ᴺᵁᴸ` represents end-of-stream.
   *
   * @example
   *  ```markdown
   *  > |/** @experimentalᴺᵁᴸ
   *         ^^^^^^^^^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/** Tokenize an identifier.␊
   *         ^^^^^^^^^^^^^^^^^^^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/** One place in a source *file* *\/
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**Handle events coming from `tokenize`*\/
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
    // comment terminated by end of stream.
    if (eos(code)) {
      effects.exit(tt.chunkComment)
      return ok(code)
    }

    // finish comment chunk after first line ending.
    // the comment container is still open.
    // `tokenizeBlockCommentContinuation` will take over from here.
    if (eol(code)) {
      effects.consume(code)
      effects.exit(tt.chunkComment)
      return ok
    }

    // try capturing comment closer before adding to chunk.
    // otherwise, consume code and move onto the next.
    return effects.check(commentCloser, beforeCloser, addToChunk)(code)
  }

  /**
   * Finish the first chunk before a comment closer.
   *
   * The closer was already confirmed with `effects.check`, so the chunk can
   * be closed before the closer is consumed.
   *
   * @example
   *  ```markdown
   *  > |/** One place in a source *file* *\/
   *                                     ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**Handle events coming from `tokenize`*\/
   *                                            ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeCloser(this: void, code: Code): State | undefined {
    effects.exit(tt.chunkComment)
    return effects.attempt(commentCloser, closeComment)(code)
  }

  /**
   * Add the current character `code` to the current chunk.
   *
   * This state is reached after checking for an inline comment closer,
   * or after ordinary content is seen inside a comment chunk.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function addToChunk(this: void, code: Code): State | undefined {
    return effects.consume(code), insideChunk
  }

  /**
   * Mark the active comment for closure.
   *
   * Container finalization is deferred to the `comments` initializer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function closeComment(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')
    self.containerState._closeFlow = true
    return ok(code)
  }
}

/**
 * Continue tokenizing an open block comment.
 *
 * A continuation begins at the start of a line.
 * Comment line prefixes and line indentation are processed before another
 * comment chunk is started.
 *
 * The continuation can also recognize the comment closer and may mark the
 * active container for closure.
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
function tokenizeBlockCommentContinuation(
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
   * The point where an active markdown indent starts.
   *
   * @var {Place | undefined} then
   */
  let then: Place | undefined

  return lineStart

  /**
   * Begin a continued comment line.
   *
   * A comment line prefix is attempted first.\
   * When a marked prefix is not present, an unmarked prefix is attempted,
   * which may use indentation when enabled.
   *
   * Both paths leave control at the beginning of normalized comment content.
   *
   * > 👉 **Note**: `␊` represents a line ending
   * > and `ᴺᵁᴸ` represents end-of-stream.
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *  > |ᴺᵁᴸ
   *     ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *  > | * The tokenization context.␊
   *     ^
   *  > | *␊
   *  > | * @const {TokenizeContext} self␊
   *  > | *\/
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *  > |   The point where an active markdown indent starts.␊
   *     ^
   *  > |␊
   *  > |   @var {Place | undefined} then␊
   *  > | *\/
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
    assert(eol(self.previous), 'expected to be at beginning of line')

    // comment terminated by end of stream.
    if (eos(code)) return nok(code)

    // try capturing a comment line prefix.
    // the construct fails if a comment line marker is missing,
    // but can succeed without a marker before a comment closer as well.
    // the comment container is marked for closure by `commentLinePrefix`
    // if a comment closer is detected.
    // on success, try starting a new comment chunk.
    // on failure, try capturing an unmarked comment line prefix.
    return effects.attempt(
      commentLinePrefix,
      beforeChunk,
      effects.attempt(commentLinePrefixPadded, beforeChunk)
    )(code)
  }

  /**
   * Prepare to start a continued comment chunk.
   *
   * If the current `comment` tokenizer encountered concrete content on the
   * previous line, control returns to the `source` initializer.
   *
   * Blank lines are delegated to the `source` initializer.
   *
   * Otherwise, a possible closer is attempted before the chunk begins.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *  > | * The tokenization context.␊
   *  > | *␊
   *  > | * @const {TokenizeContext} self␊
   *  > | *\/
   *      ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *  > | * The tokenization context.␊
   *        ^
   *  > | *␊
   *  > | * @const {TokenizeContext} self␊
   *  > | *\/
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *  > |   The point where an active markdown indent starts.␊
   *        ^
   *  > |␊
   *  > |   @var {Place | undefined} then␊
   *  > | *\/
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
    assert(self.containerState, 'expected `containerState` inside comment')

    // the comment container was marked for closure.
    // a comment closer was captured by the `commentLinePrefix` construct.
    // the `source` initializer will handle exiting the comment.
    if (self.containerState._closeFlow) return ok(code)

    // concrete subcontent encountered on previous line.
    // bypass chunk creation and comment closer check.
    if (self.concrete) return ok(code)

    // previous active markdown indent, fresh region, or previous blank line.
    if (
      self.containerState.markdownIndent ||
      self.parser.previousBlankLine ||
      self.parser.freshRegion ||
      self.parser.freshComment
    ) {
      // possible indented code start.
      // capture current place in the content.
      if (whitespace(code)) then = self.now()
    }

    // check for a blank line.
    // if found, delegate to the `source` initializer.
    // otherwise check for a comment closer.
    return effects.check(
      blankLine,
      ok,
      // check for a comment closer.
      // if found, mark the comment container for closure.
      // otherwise, start comment content chunk.
      effects.attempt(commentCloser, closeComment, startChunk)
    )(code)
  }

  /**
   * Start a continued comment chunk.
   *
   * The chunk therefore begins at normalized comment content.\
   * Comment line prefixes have already been consumed and blank lines have
   * already been delegated to the `source` initializer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startChunk(this: void, code: Code): State | undefined {
    assert(!self.concrete, 'did not expect concrete subcontent')
    assert(!eol(code), 'did not expect line ending')
    assert(!eos(code), 'did not expect end of stream')

    // start new comment content chunk.
    // the `source` initializer will handle linking and writing chunks.
    effects.enter(tt.chunkComment, {
      contentType: constants.contentTypeComment
    })

    return insideChunk(code)
  }

  /**
   * Continue a comment chunk on a continued line.
   *
   * Content is consumed through the end of the line.\
   * A possible closer is checked before adding to the chunk.
   *
   * The completed chunk includes its line ending when one is present.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideChunk(this: void, code: Code): State | undefined {
    // comment terminated by end of stream.
    // the `source` initializer will handle exiting the comment.
    if (eos(code)) {
      effects.exit(tt.chunkComment)
      return ok(code)
    }

    // finish chunk after line ending.
    // the `source` initializer will handle continuing the comment.
    if (eol(code)) {
      effects.consume(code)
      effects.exit(tt.chunkComment)
      return ok
    }

    // check for markdown indented code prefix.
    // let the `source` initializer take over if indented code is detected.
    if (then && whitespace(self.previous) && !whitespace(code)) {
      /**
       * The points to start and stop slicing the stream.
       *
       * @const {Position} range
       */
      const range: Position = { end: self.now(), start: then }

      // line prefix is actually part of indented code.
      // signal markdown indentation to allow continued indented code checks
      // for the next line and delegate comment content chunk creation to the
      // `source` initializer to bypass any remaining comment closer checks.
      if (self.sliceSerialize(range, true).length >= constants.tabSize) {
        assert(
          self.containerState,
          'expected `containerState` inside comment'
        )

        // signal markdown indentation.
        self.containerState.markdownIndent = true

        // end of line prefix.
        // finish comment content chunk.
        effects.exit(tt.chunkComment)

        // delegate chunk creation to the `source` initializer.
        // the initializer will create a separate chunk for the rest of the
        // line and link it to the chunk that was just closed.
        // the next continuation attempt will start at beginning
        // of the next line instead of the current position.
        return ok(code)
      }

      // no indented code prefix.

      // discard the whitespace start point.
      then = undefined
    }

    // check for comment closer sequence adding to chunk.
    return effects.check(commentCloser, beforeCloser, addToChunk)(code)
  }

  /**
   * Add the current character code to a continued comment chunk.
   *
   * This state is reached after ordinary content or a failed closer check.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function addToChunk(this: void, code: Code): State | undefined {
    return effects.consume(code), insideChunk
  }

  /**
   * Finish a continued chunk before a confirmed comment closer.
   *
   * The chunk is closed before the closer is consumed.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeCloser(this: void, code: Code): State | undefined {
    effects.exit(tt.chunkComment)
    return effects.attempt(commentCloser, closeComment)(code)
  }

  /**
   * Mark the continued comment for closure.
   *
   * Container finalization is deferred to the `comments` initializer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function closeComment(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')
    self.containerState._closeFlow = true
    return ok(code)
  }
}

/**
 * Tokenize a comment opener.
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
function tokenizeCommentOpener(
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

  return startOpener

  /**
   * Begin a comment opener.
   *
   * @example
   *  ```markdown
   *  > |/**
   *     ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startOpener(this: void, code: Code): State | undefined {
    effects.enter(tt.commentOpener) // start the comment opener.

    // try capturing markers.
    return factoryMarkers(effects, afterMarkers, nok, [
      { code: codes.slash },
      { code: codes.asterisk }
    ])(code)
  }

  /**
   * Finish a comment opener.
   *
   * Whitespace following the marker is classified as trailing whitespace,
   * comment padding, or arbitrary whitespace.\
   * Whitespace immediately preceding a comment closer is considered arbitrary
   * when only a single whitespace separates the opener from the closer.
   *
   * > 👉 **Note**: `␊` represents a line ending, `␠` represents a space,
   * > and `ᴺᵁᴸ` represents end-of-stream.
   *
   * @example
   *  ```markdown
   *  > |/**␊
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**ᴺᵁᴸ
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␠␠␊
   *        ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |/**␠*\/
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
  function afterMarkers(this: void, code: Code): State | undefined {
    propagate(effects.exit(tt.commentOpener)) // finish the comment opener.

    // try capturing trailing whitespace.
    // if attempt fails, check for comment closer sequence.
    return effects.attempt(
      trailingWhitespace,
      ok,
      // check for comment closer sequence.
      // on success, capture the leading whitespace as `whitespace` instead
      // of capturing as `commentPadding`.
      // this will force the next `commentCloser` attempt or check to only
      // succeed when an actual closer is seen.
      // on failure, the first whitespace character is seen as padding.
      effects.check(
        commentCloser,
        factorySpace(
          effects,
          ok,
          tt.whitespace,
          constants.commentPaddingSizeMin
        ),
        factorySpace(
          effects,
          ok,
          tt.commentPadding,
          constants.commentPaddingSizeMin
        )
      )
    )(code)
  }

  /**
   * Propagate the opener token and width to the current container state.
   *
   * @this {void}
   *
   * @param {Token} token
   *  The comment opener token
   * @return {undefined}
   */
  function propagate(this: void, token: Token): undefined {
    assert(self.containerState, 'expected `containerState` inside comment')
    assert(token.type === tt.commentOpener, 'expected `commentOpener` token')

    // propagate token and width to container state.
    self.containerState.opener = token
    self.containerState.openerWidth = token.end.column - token.start.column

    return void token
  }
}

/**
 * Tokenize a comment closer.
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
function tokenizeCommentCloser(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return factorySpace(
    effects,
    startCloser,
    tt.commentPadding,
    constants.commentPaddingSizeMin
  )

  /**
   * Attempt to begin a comment closer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startCloser(this: void, code: Code): State | undefined {
    effects.enter(tt.commentCloser) // start the comment closer.

    // try capturing markers.
    return factoryMarkers(effects, after, nok, [
      codes.asterisk,
      codes.slash
    ])(code)
  }

  /**
   * Finish a comment closer.
   *
   * Control returns to the parent tokenizer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function after(this: void, code: Code): State | undefined {
    effects.exit(tt.commentCloser)
    return ok(code)
  }
}

/**
 * Tokenize a trailing comment closer.
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
function tokenizeTrailingCommentCloser(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startTrail

  /**
   * Start the whitespace trail.
   *
   * Whitespace is captured separately so it's not considered comment padding.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startTrail(this: void, code: Code): State | undefined {
    assert(whitespace(code), 'expected whitespace code')
    return effects.enter(tt.whitespace), effects.consume(code), insideTrail
  }

  /**
   * Inside the whitespace trail.
   *
   * If no comment closer is present, additional whitespace is consumed.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideTrail(this: void, code: Code): State | undefined {
    return effects.check(commentCloser, closeTrail, addToTrail)(code)
  }

  /**
   * Finish the whitespace trail before a confirmed comment closer.
   *
   * The `whitespace` token is closed before the comment closer is captured.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function closeTrail(this: void, code: Code): State | undefined {
    effects.exit(tt.whitespace)
    return effects.attempt(commentCloser, ok)(code)
  }

  /**
   * Continue the whitespace trail.
   *
   * Tokenization fails when the current character is not whitespace.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function addToTrail(this: void, code: Code): State | undefined {
    if (!whitespace(code)) return nok(code)
    return effects.consume(code), insideTrail
  }
}

/**
 * Tokenize a comment line prefix.
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
function tokenizeCommentLinePrefix(
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

  return prefixBefore

  /**
   * Try to begin a comment line prefix.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function prefixBefore(this: void, code: Code): State | undefined {
    assert(eol(self.previous), 'expected to be at beginning of line')

    // try starting the comment line prefix.
    // the current `code` cannot begin a comment closer.
    if (code !== codes.asterisk) return prefixStart(code)

    // succeed without consuming any input or producing any events
    // if a comment closer can begin at the current position.
    // otherwise, try starting the comment line prefix.
    return effects.attempt(commentCloser, closeComment, prefixStart)(code)
  }

  /**
   * Begin a comment line prefix.
   *
   * Leading padding is consumed before checking whether the current position
   * begins a closer or contains a line marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function prefixStart(this: void, code: Code): State | undefined {
    effects.enter(tt.commentLinePrefix)

    /**
     * Capture optional comment padding after the comment line marker.
     *
     * Padding following the marker is captured in a `commentPadding` token.
     *
     * @const {State} paddingAfter
     */
    const paddingAfter: State = factorySpace(
      effects,
      endPrefix,
      tt.commentPadding,
      constants.commentPaddingSizeMin
    )

    // capture leading padding before a comment closer or line marker.
    return factorySpace(
      effects,
      // check for a comment closer before attempting the line marker.
      // if found, end the prefix before capturing the comment closer.
      // otherwise, capture the line marker and optional padding following it.
      // note: this is required for comments whose first closing marker is the
      // same as their comment line marker (e.g. js/ts block comments).
      effects.check(
        commentCloser,
        endPrefixBeforeCloser,
        factoryMarkers(effects, paddingAfter, nok, codes.asterisk)
      ),
      tt.commentPadding
    )(code)
  }

  /**
   * Finish the comment line prefix.
   *
   * Control is then passed back to the parent tokenizer.
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

  /**
   * Before a confirmed comment closer.
   *
   * The possible closer was already confirmed with `effects.check`,
   * so the prefix can be ended before the closer is consumed.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endPrefixBeforeCloser(this: void, code: Code): State | undefined {
    effects.exit(tt.commentLinePrefix)
    return effects.attempt(commentCloser, closeComment)(code)
  }

  /**
   * Mark the active comment for closure.
   *
   * Container finalization is deferred to the `source` initializer.
   *
   * Via {@linkcode self.containerState}, this state records that the comment
   * has reached its closing boundary without exiting the container directly.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function closeComment(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')
    self.containerState._closeFlow = true
    return ok(code)
  }
}

/**
 * Tokenize a padding-only comment line prefix.
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
function tokenizeCommentLinePrefixPadded(
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

  return prefixBefore

  /**
   * Try to begin a comment line prefix.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function prefixBefore(this: void, code: Code): State | undefined {
    assert(eol(self.previous), 'expected to be at beginning of line')
    if (whitespace(code)) return prefixStart(code)
    return ok(code)
  }

  /**
   * Begin a comment line prefix.
   *
   * Leading comment padding is consumed based on the `end` column of the
   * current comment opener ({@linkcode self.containerState.opener}).
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function prefixStart(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside comment')
    assert(self.containerState.opener, 'expected comment `opener` token')

    // start comment line prefix.
    effects.enter(tt.commentLinePrefix)

    // capture leading padding, then end comment line prefix.
    return factorySpace(
      effects,
      endPrefix,
      tt.commentPadding,
      self.containerState.opener.end.column
    )(code)
  }

  /**
   * Finish the comment line prefix.
   *
   * Control is then passed back to the parent tokenizer.
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
