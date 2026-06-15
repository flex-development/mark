/**
 * @file Type Aliases - Writable
 * @module fsm/parse/types/Writable
 */

import type {
  Chunk,
  FileLike,
  List,
  Value
} from '@flex-development/fsm/parse'

/**
 * Union of values that can occur where a slice of chunks is expected.
 *
 * @see {@linkcode Chunk}
 * @see {@linkcode FileLike}
 * @see {@linkcode List}
 * @see {@linkcode Value}
 */
type Writable = Chunk | FileLike | List<Chunk | FileLike | Value> | Value

export type { Writable as default }
