/**
 * @file Constructs - wc
 * @module examples/jack/parse/constructs/wc
 */

import { tt } from '@flex-development/jack/symbol'
import factorySpace from '@flex-development/mark-factory-space'
import {
  bos,
  eos,
  lineEndingOrWhitespace,
  streamBreak,
  unicodeWhitespace,
  whitespace
} from '@flex-development/mark-util-character'
import type {
  Code,
  Effects,
  PartialConstruct,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'
import blankLine from './blank-line.mts'
import trailingWhitespace from './trailing-whitespace.mts'

/**
 * The whitespace and comments construct.
 *
 * @const {PartialConstruct} wc
 */
const wc: PartialConstruct = {
  partial: true,
  tokenize: tokenizeWhitespaceAndComments
}

export default wc

/**
 * Tokenize whitespace and comments.
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
function tokenizeWhitespaceAndComments(
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

  return maybe

  /**
   * Try starting a whitespace with comments sequence.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybe(this: void, code: Code): State | undefined {
    if (streamBreak(code)) return start(code)
    if (unicodeWhitespace(code)) return start(code)
    if (lineEndingOrWhitespace(code)) return start(code)
    return nok(code)
  }

  /**
   * Start or continue a whitespace with comments sequence.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function start(this: void, code: Code): State | undefined {
    // not inside a comment, and no json whitespace.
    if (
      !self.parser.activeComment &&
      !lineEndingOrWhitespace(code) &&
      !unicodeWhitespace(code)
    ) {
      return ok(code)
    }

    // inside a comment.
    if (self.parser.activeComment) return effects.consume(code), start

    // at beginning of stream or line.
    // try parsing a blank line.
    // if the attempt fails, try capturing a line prefix.
    if (bos(self.previous) || self.eol(self.previous)) {
      return effects.attempt(
        blankLine,
        endBlankLine,
        factorySpace(effects, start, { test: whitespace, type: tt.linePrefix })
      )(code)
    }

    // capture the line ending.
    if (self.eol(code)) {
      effects.enter(tt.lineEnding)
      effects.consume(code)
      effects.exit(tt.lineEnding)
      return start
    }

    // try capturing trailing whitespace.
    // if attempt fails, try capturing arbitrary whitespace.
    return effects.attempt(
      trailingWhitespace,
      start,
      factorySpace(effects, start, { test: whitespace, type: tt.whitespace })
    )(code)
  }

  /**
   * End a blank line.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endBlankLine(this: void, code: Code): State | undefined {
    assert(self.eol(code) || eos(code), 'expected line ending or end of stream')

    // at end of stream.
    if (eos(code)) return ok(code)

    // capture the blank line ending.
    effects.enter(tt.lineEndingBlank)
    effects.consume(code)
    effects.exit(tt.lineEndingBlank)
    return start
  }
}
