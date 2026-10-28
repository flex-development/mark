/**
 * @file Type Aliases - SerializeChunks
 * @module mark/parse/types/SerializeChunks
 */

import type { Chunk, SerializeOptions } from '@flex-development/mark/parse'

/**
 * Get the string value of a slice of `chunks`.
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
type SerializeChunks = (
  this: void,
  chunks: Chunk[],
  options?: SerializeOptions | boolean | null | undefined
) => string

export type { SerializeChunks as default }
