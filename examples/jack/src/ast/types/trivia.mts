/**
 * @file Type Aliases - Trivia
 * @module examples/jack/ast/types/Trivia
 */

import type { Comment } from '@flex-development/docast'
import type { Break, LinePrefix, Whitespace } from '@flex-development/jack/ast'

/**
 * Union of nodes representing a comment or whitespace.
 *
 * @see {@linkcode Break}
 * @see {@linkcode Comment}
 * @see {@linkcode LinePrefix}
 * @see {@linkcode Whitespace}
 */
type Trivia = Break | Comment | LinePrefix | Whitespace

export type { Trivia as default }
