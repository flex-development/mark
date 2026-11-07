/**
 * @file parse
 * @module examples/jack/parse
 */

import { constants } from '@flex-development/jack/symbol'
import { createTokenizer } from '@flex-development/mark-parser'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  InitialConstructs,
  NormalizedExtension,
  ParseContext,
  TokenizeContext
} from '@flex-development/mark/parse'
import {
  attention,
  autolink,
  blockQuote,
  characterEscape,
  characterReference,
  codeFenced,
  codeIndented,
  codeText,
  definition,
  hardBreakEscape,
  headingAtx,
  htmlFlow,
  htmlText,
  labelEnd,
  labelStartImage,
  labelStartLink,
  lineEnding,
  list,
  setextUnderline,
  thematicBreak
} from 'micromark-core-commonmark'
import arrayExpression from './constructs/array.expression.mts'
import blockComment from './constructs/block.comment.mts'
import booleanExpression from './constructs/boolean.expression.mts'
import lineComment from './constructs/line.comment.mts'
import nullExpression from './constructs/null.expression.mts'
import numberExpression from './constructs/number.expression.mts'
import objectExpression from './constructs/object.expression.mts'
import stringExpression from './constructs/string.expression.mts'
import comment from './initialize/comment.mts'
import content from './initialize/content.mts'
import document from './initialize/document.mts'
import flow from './initialize/flow.mts'
import language from './initialize/language.mts'
import source from './initialize/source.mts'
import { string, text } from './initialize/text.mts'

export default parse

/**
 * Create a parser.
 *
 * Tokenizers deal with one content type.\
 * The parser is the object dealing with it all.
 *
 * @see {@linkcode ParseContext}
 *
 * @this {void}
 *
 * @return {ParseContext}
 *  The parse context
 */
function parse(this: void): ParseContext {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} context
   */
  const context: TokenizeContext = createTokenizer({
    debug: 'jack',
    extensions,
    finalizeContext,
    initialize
  })

  return context.parser

  /**
   * Create an extension.
   *
   * @this {void}
   *
   * @return {NormalizedExtension}
   *  The new extension
   */
  function extensions(this: void): NormalizedExtension {
    return {
      [constants.contentTypeExpression]: {
        [codes.quotationMark]: stringExpression, // string
        [codes.plusSign]: numberExpression, // number (explicit positive)
        [codes.dash]: numberExpression, // number (negative)
        [codes.digit0]: numberExpression, // number
        [codes.digit1]: numberExpression, // number
        [codes.digit2]: numberExpression, // number
        [codes.digit3]: numberExpression, // number
        [codes.digit4]: numberExpression, // number
        [codes.digit5]: numberExpression, // number
        [codes.digit6]: numberExpression, // number
        [codes.digit7]: numberExpression, // number
        [codes.digit8]: numberExpression, // number
        [codes.digit9]: numberExpression, // number
        [codes.leftSquareBracket]: arrayExpression, // array
        [codes.lowercaseF]: booleanExpression, // false
        [codes.lowercaseN]: nullExpression, // null
        [codes.lowercaseT]: booleanExpression, // true
        [codes.leftCurlyBrace]: objectExpression // object
      },
      [constants.contentTypeComments]: {
        [codes.slash]: [blockComment, lineComment]
      },
      [constants.contentTypeDocument]: {
        [codes.asterisk]: list,
        [codes.plusSign]: list,
        [codes.dash]: list,
        [codes.digit0]: list,
        [codes.digit1]: list,
        [codes.digit2]: list,
        [codes.digit3]: list,
        [codes.digit4]: list,
        [codes.digit5]: list,
        [codes.digit6]: list,
        [codes.digit7]: list,
        [codes.digit8]: list,
        [codes.digit9]: list,
        [codes.greaterThan]: blockQuote
      },
      [constants.contentTypeFlow]: {
        [codes.numberSign]: headingAtx,
        [codes.asterisk]: thematicBreak,
        [codes.dash]: [setextUnderline, thematicBreak],
        [codes.lessThan]: htmlFlow,
        [codes.equalsTo]: setextUnderline,
        [codes.underscore]: thematicBreak,
        [codes.graveAccent]: codeFenced,
        [codes.tilde]: codeFenced
      },
      [constants.contentTypeString]: {
        [codes.ampersand]: characterReference,
        [codes.backslash]: characterEscape
      },
      [constants.contentTypeText]: {
        [codes.carriageReturn]: lineEnding,
        [codes.lineFeed]: lineEnding,
        [codes.carriageReturnLineFeed]: lineEnding,
        [codes.exclamationMark]: labelStartImage,
        [codes.ampersand]: characterReference,
        [codes.asterisk]: attention,
        [codes.lessThan]: [autolink, htmlText],
        [codes.leftSquareBracket]: labelStartLink,
        [codes.backslash]: [hardBreakEscape, characterEscape],
        [codes.rightSquareBracket]: labelEnd,
        [codes.underscore]: attention,
        [codes.graveAccent]: codeText
      },
      attentionMarkers: {
        null: [codes.asterisk, codes.underscore]
      },
      contentInitial: {
        [codes.leftSquareBracket]: definition
      },
      flowInitial: {
        [codes.horizontalTab]: codeIndented,
        [codes.virtualSpace]: codeIndented,
        [codes.space]: codeIndented
      },
      insideSpan: {
        null: [attention, { resolveAll: string.resolveAll }]
      }
    } as unknown as NormalizedExtension
  }

  /**
   * Finalize the tokenization context.
   *
   * @this {void}
   *
   * @param {TokenizeContext} self
   *  The base tokenization context
   * @return {undefined}
   */
  function finalizeContext(this: void, self: TokenizeContext): undefined {
    if (typeof self.parser.defined === 'undefined') self.parser.defined = []
    if (typeof self.parser.lazy === 'undefined') self.parser.lazy = {}
    if (self.contentType) self.debug.namespace = `jack:${self.contentType}`

    switch (self.contentType) {
      case constants.contentTypeDocument:
      case constants.contentTypeFlow:
      case constants.contentTypeContent:
      case constants.contentTypeText:
      case constants.contentTypeString:
        self.code = codes.eos
        self.previous = codes.eos
        self.noEmptyTokens = true
        self.noPrevious = true
        break
      case constants.contentTypeSource:
      case constants.contentTypeComment:
        self.code = codes.bos
        self.previous = codes.bos
        break
      case constants.contentTypeLanguage:
        self.code = codes.bos
        self.previous = codes.bos
        self.moveOnBreak = true
        self.noEmptyTokens = true
        break
      default:
        break
    }

    return void self
  }

  /**
   * Create a record of initial constructs.
   *
   * @this {void}
   *
   * @return {InitialConstructs}
   *  The record of initial constructs
   */
  function initialize(this: void): InitialConstructs {
    return {
      [constants.contentTypeSource]: source,
      [constants.contentTypeComment]: comment,
      [constants.contentTypeDocument]: document,
      [constants.contentTypeFlow]: flow,
      [constants.contentTypeContent]: content,
      [constants.contentTypeText]: text,
      [constants.contentTypeString]: string,
      [constants.contentTypeLanguage]: language
    }
  }
}
