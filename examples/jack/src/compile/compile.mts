/**
 * @file compile
 * @module docast-util-from-comments/compile
 */

import type { Root } from '@flex-development/jack/ast'
import type { Options } from '@flex-development/jack/compile'
import { parse, postprocess } from '@flex-development/jack/parse'
import { preprocess } from '@flex-development/mark-parser'
import type {
  Chunk,
  Encoding,
  FileLike,
  TokenizeContext,
  Value
} from '@flex-development/mark/parse'
import compiler from './compiler.mts'

export default compile

/**
 * Turn JSON into a syntax tree.
 *
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode Options}
 * @see {@linkcode Root}
 * @see {@linkcode Value}
 *
 * @this {void}
 *
 * @param {FileLike | Value | null | undefined} value
 *  The source file or content to parse
 * @param {Encoding | null | undefined} [encoding]
 *  The character encoding to use when `value` or its contents
 *  is an {@linkcode Uint8Array}
 * @param {Options | null | undefined} [options]
 *  The tree creation options
 * @return {Root}
 *  jack cst
 */
function compile(
  this: void,
  value: FileLike | Value | null | undefined,
  encoding?: Encoding | null | undefined,
  options?: Options | null | undefined
): Root

/**
 * Turn JSON into a syntax tree.
 *
 * @see {@linkcode FileLike}
 * @see {@linkcode Options}
 * @see {@linkcode Root}
 * @see {@linkcode Value}
 *
 * @this {void}
 *
 * @param {FileLike | Value | null | undefined} value
 *  The source file or content to parse
 * @param {Options | null | undefined} [options]
 *  The tree creation options
 * @return {Root}
 *  jack cst
 */
function compile(
  this: void,
  value: FileLike | Value | null | undefined,
  options?: Options | null | undefined
): Root

/**
 * Turn JSON into a syntax tree.
 *
 * @see {@linkcode Encoding}
 * @see {@linkcode FileLike}
 * @see {@linkcode Options}
 * @see {@linkcode Root}
 * @see {@linkcode Value}
 *
 * @this {void}
 *
 * @param {FileLike | Value | null | undefined} value
 *  The source file or content to parse
 * @param {Encoding | Options | null | undefined} [encoding]
 *  The character encoding to use when `value` or its contents
 *  is an {@linkcode Uint8Array}, or configuration options
 * @param {Options | null | undefined} [options]
 *  The tree creation options
 * @return {Root}
 *  jack cst
 */
function compile(
  this: void,
  value: FileLike | Value | null | undefined,
  encoding?: Encoding | Options | null | undefined,
  options?: Options | null | undefined
): Root {
  if (encoding && typeof encoding === 'object') {
    options = encoding
    encoding = undefined
  }

  /**
   * The chunks to write.
   *
   * @const {Chunk[]} slice
   */
  const slice: Chunk[] = preprocess(options)(value, undefined, true)

  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} context
   */
  const context: TokenizeContext = parse().source(options?.from)

  return compiler(options)(postprocess(context.write(slice)))
}
