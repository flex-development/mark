/**
 * @file sliceChunks
 * @module mark-util-serialize/sliceChunks
 */

import { chars } from '@flex-development/mark-util-symbol'
import type { Chunk, Position } from '@flex-development/mark/parse'
import { ok } from 'devlop'

/**
 * Get the chunks spanning a token (or location).
 *
 * Numeric chunks are addressed by `_index` only.\
 * String chunks are addressed by `_index` plus `_bufferIndex`.
 *
 * @this {void}
 *
 * @param {Chunk[]} chunks
 *  The slice of chunks
 * @param {Position} range
 *  The position in stream
 * @return {Chunk[]}
 *  The list of chunks spanning `range`
 */
function sliceChunks(this: void, chunks: Chunk[], range: Position): Chunk[] {
  const { _bufferIndex: endBufIndex, _index: endIndex } = range.end
  const { _bufferIndex: startBufIndex, _index: startIndex } = range.start

  /**
   * The chunks spanning {@linkcode range}.
   *
   * @var {Chunk[]} view
   */
  let view: Chunk[] = []

  if (!chunks.length) {
    // no chunks, no view.
  } else if (startIndex === endIndex) { // within the same chunk.
    if (startBufIndex === endBufIndex) {
      view = [chars.empty]
    } else { // slice string chunk.
      ok(endBufIndex > -1, 'expected non-negative end buffer index')
      ok(startBufIndex > -1, 'expected non-negative start buffer index')
      ok(typeof chunks[startIndex] === 'string', 'expected string chunk')
      view = [chunks[startIndex].slice(startBufIndex, endBufIndex)]
    }
  } else { // spanning multiple chunks.
    view = chunks.slice(startIndex, endIndex)

    // starts inside string chunk.
    if (startBufIndex > -1) {
      /**
       * The first chunk in the slice.
       *
       * @const {Chunk | undefined} head
       */
      const head: Chunk | undefined = view[0]

      // replace `head` with slice of itself.
      ok(typeof head === 'string', 'expected string chunk')
      view[0] = head.slice(startBufIndex)
    }

    if (endBufIndex > 0) { // ends inside string chunk.
      ok(typeof chunks[endIndex] === 'string', 'expected string chunk')
      view.push(chunks[endIndex].slice(0, endBufIndex))
    }
  }

  return view
}

export default sliceChunks
