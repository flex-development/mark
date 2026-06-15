/**
 * @file Type Aliases - Compile
 * @module fsm/compile/types/Compile
 */

import type { CompileResult } from '@flex-development/fsm/compile'
import type { Event } from '@flex-development/fsm/parse'

/**
 * Turn parser events into a compilation result.
 *
 * @see {@linkcode CompileResult}
 * @see {@linkcode Event}
 *
 * @this {void}
 *
 * @param {Event[] | null | undefined} [events]
 *  The list of events
 * @return {CompileResult}
 *  The compilation result
 */
type Compile = (
  this: void,
  events?: Event[] | null | undefined
) => CompileResult

export type { Compile as default }
