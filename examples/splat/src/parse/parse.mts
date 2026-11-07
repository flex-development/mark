/**
 * @file parse
 * @module examples/splat/parse/parse
 */

import { createTokenizer } from '@flex-development/mark-parser'
import combineExtensions from '@flex-development/mark-util-combine-extensions'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  InitialConstructs,
  NormalizedExtension,
  ParseContext,
  TokenizeContext
} from '@flex-development/mark/parse'
import type { Options } from '@flex-development/splat/parse'
import { constants } from '@flex-development/splat/symbol'
import literal from './initialize/literal.mts'
import pattern from './initialize/pattern.mts'
import syntax from './syntax.mts'

export default parse

/**
 * Create a parser.
 *
 * Tokenizers deal with one content type.\
 * The parser is the object dealing with it all.
 *
 * @see {@linkcode Options}
 * @see {@linkcode ParseContext}
 *
 * @this {void}
 *
 * @param {Options | null | undefined} [options]
 *  The parse options
 * @return {ParseContext}
 *  The parse context
 */
function parse(
  this: void,
  options?: Options | null | undefined
): ParseContext {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} context
   */
  const context: TokenizeContext = createTokenizer({
    debug: 'splat',
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
    return combineExtensions(syntax)
  }

  /**
   * Finalize the tokenization context.
   *
   * @this {void}
   *
   * @param {TokenizeContext} self
   *  The base tokenize context
   * @return {undefined}
   */
  function finalizeContext(this: void, self: TokenizeContext): undefined {
    if (self.contentType) {
      self.code = codes.bos
      self.previous = codes.bos
      self.debug.namespace = `splat:${self.contentType}`
      self.containerState = {}
      self.copyContainerState = true
      self.noEmptyTokens = true
    }

    return void Object.assign(self, options)
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
      [constants.contentTypePattern]: pattern,
      [constants.contentTypeLiteral]: literal
    }
  }
}
