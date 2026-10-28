/**
 * @file Type Aliases - Writable
 * @module mark/parse/types/Writable
 */

import type { List } from '@flex-development/mark/core'
import type { Chunk } from '@flex-development/mark/parse'

/**
 * Union of values that can occur where a slice of chunks is expected.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode List}
 */
type Writable = Chunk | List<Chunk>

export type { Writable as default }
