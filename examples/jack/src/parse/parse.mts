/**
 * @file parse
 * @module examples/jack/parse
 */

import { constants } from '@flex-development/jack/symbol'
import { createTokenizer } from '@flex-development/mark-parser'
import combineExtensions from '@flex-development/mark-util-combine-extensions'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  InitialConstructs,
  NormalizedExtension,
  ParseContext,
  TokenizeContext
} from '@flex-development/mark/parse'
import markdown from './extensions/markdown.mts'
import syntax from './extensions/syntax.mts'
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
    return combineExtensions(markdown, syntax)
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
      [constants.contentTypeLanguage]: language,
      [constants.contentTypeComment]: comment,
      [constants.contentTypeDocument]: document,
      [constants.contentTypeFlow]: flow,
      [constants.contentTypeContent]: content,
      [constants.contentTypeText]: text,
      [constants.contentTypeString]: string
    }
  }
}
