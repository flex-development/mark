/**
 * @file Type Aliases - Chunk
 * @module mark/parse/types/Chunk
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * A character code or slice of a buffer in the form of a string.
 *
 * @see {@linkcode Code}
 */
type Chunk = Code | string

export type { Chunk as default }
