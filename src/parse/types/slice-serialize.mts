/**
 * @file Type Aliases - SliceSerialize
 * @module fsm/parse/types/SliceSerialize
 */

import type { Range, SerializeOptions } from '@flex-development/fsm/parse'

/**
 * Get the text spanning `range`.
 *
 * @see {@linkcode Range}
 * @see {@linkcode SerializeOptions}
 *
 * @this {void}
 *
 * @param {Range} range
 *  The slice position
 * @param {SerializeOptions | boolean | null | undefined} [options]
 *  Options for serializing or whether to expand tabs
 * @return {string}
 *  The serialized slice
 */
type SliceSerialize = (
  this: void,
  range: Range,
  options?: SerializeOptions | boolean | null | undefined
) => string

export type { SliceSerialize as default }
