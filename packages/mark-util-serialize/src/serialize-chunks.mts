/**
 * @file serializeChunks
 * @module mark-util-serialize/serializeChunks
 */

import { chars, codes } from '@flex-development/mark-util-symbol'
import type { Chunk, SerializeOptions } from '@flex-development/mark/parse'
import { ok } from 'devlop'

/**
 * Stringify a slice of `chunks`.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode SerializeOptions}
 *
 * @this {void}
 *
 * @param {Chunk[]} chunks
 *  The chunks to serialize
 * @param {SerializeOptions | boolean | null | undefined} [options]
 *  Options for serializing or whether to expand tabs
 * @return {string}
 *  The string value of `chunks`
 */
function serializeChunks(
  this: void,
  chunks: Chunk[],
  options?: SerializeOptions | boolean | null | undefined
): string {
  if (typeof options === 'boolean' || !options) {
    options = { expandTabs: options }
  }

  /**
   * The serialized character codes.
   *
   * @const {string[]} result
   */
  const result: string[] = []

  /**
   * The index of the current chunk.
   *
   * @var {number} index
   */
  let index: number = -1

  /**
   * Whether the current character code represents a horizontal tab.
   *
   * @var {boolean} tab
   */
  let tab: boolean = false

  while (++index < chunks.length) {
    /**
     * The current chunk.
     *
     * @const {Chunk | undefined} chunk
     */
    const chunk: Chunk | undefined = [...chunks][index]

    /**
     * The serialized chunk.
     *
     * @var {string} value
     */
    let value: string

    ok(typeof chunk !== 'undefined', 'expected `chunk`')

    if (typeof chunk === 'string') {
      value = chunk
    } else {
      switch (true) {
        case chunk === codes.break && options.breaks !== null:
          if (typeof options.breaks === 'string') {
            value = options.breaks
          } else {
            value = options.breaks ? chars.space : chars.empty
          }

          break
        case chunk === codes.carriageReturnLineFeed:
          value = chars.crlf
          break
        case chunk === codes.bos:
        case chunk === codes.empty:
          value = chars.empty
          break
        case chunk === codes.carriageReturn:
          value = chars.cr
          break
        case chunk === codes.horizontalTab:
          value = options.expandTabs ? chars.space : chars.ht
          break
        case chunk === codes.lineFeed:
          value = chars.lf
          break
        case chunk === codes.virtualSpace:
          if (!options.expandTabs && tab) continue
          value = chars.space
          break
        default:
          ok(typeof chunk === 'number', 'expected code point')
          value = String.fromCodePoint(chunk)
      }
    }

    tab = chunk === codes.horizontalTab
    result.push(value)
  }

  return result.join(chars.empty)
}

export default serializeChunks
