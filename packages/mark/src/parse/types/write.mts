/**
 * @file Type Aliases - Write
 * @module mark/parse/types/Write
 */

import type { Event, Writable } from '@flex-development/mark/parse'

/**
 * Write a slice of chunks.
 *
 * The eos code (`null`) can be used to signal end of stream.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Writable}
 *
 * @this {void}
 *
 * @param {Writable} slice
 *  The chunk or list of chunks to write
 * @return {Event[]}
 *  The list of events if at the end of stream, otherwise an empty array
 */
type Write = (this: void, slice: Writable) => Event[]

export type { Write as default }
