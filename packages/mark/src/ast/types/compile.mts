/**
 * @file Type Aliases - Compile
 * @module mark/ast/types/Compile
 */

import type { Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'

/**
 * Turn parser events into a syntax {@linkcode Tree}.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Tree}
 *
 * @this {void}
 *
 * @param {Event[] | null | undefined} [events]
 *  The list of events
 * @return {Tree}
 *  The syntax tree
 */
type Compile = (this: void, events?: Event[] | null | undefined) => Tree

export type { Compile as default }
