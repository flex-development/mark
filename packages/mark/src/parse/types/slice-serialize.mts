/**
 * @file Type Aliases - SliceSerialize
 * @module mark/parse/types/SliceSerialize
 */

import type { Position, SerializeOptions } from '@flex-development/mark/parse'

/**
 * Get the text that spans a token (or location).
 *
 * @see {@linkcode Position}
 * @see {@linkcode SerializeOptions}
 *
 * @this {void}
 *
 * @param {Position} range
 *  The position in stream
 * @param {SerializeOptions | boolean | null | undefined} [options]
 *  Options for serializing or whether to expand tabs
 * @return {string}
 *  The serialized slice
 */
type SliceSerialize = (
  this: void,
  range: Position,
  options?: SerializeOptions | boolean | null | undefined
) => string

export type { SliceSerialize as default }
