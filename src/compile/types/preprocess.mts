/**
 * @file Type Aliases - Preprocess
 * @module fsm/compile/types/Preprocess
 */

import type {
  CompileContext,
  CompileResult
} from '@flex-development/fsm/compile'
import type { Event } from '@flex-development/fsm/parse'

/**
 * Prepare `events` and the initial `result` before compilation begins.
 *
 * This hook can inspect or mutate `events`, initialize compiler data,
 * or manipulate the initial `result` before token handlers run.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode CompileResult}
 * @see {@linkcode Event}
 *
 * @this {CompileContext}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {CompileResult} result
 *  The current compilation result
 * @return {null | undefined}
 */
type Preprocess = (
  this: CompileContext,
  events: Event[],
  result: CompileResult
) => null | undefined

export type { Preprocess as default }
