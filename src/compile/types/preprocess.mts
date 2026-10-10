/**
 * @file Type Aliases - Preprocess
 * @module mark/compile/types/Preprocess
 */

import type { CompileResult, Context } from '@flex-development/mark/compile'
import type { Event } from '@flex-development/mark/parse'

/**
 * Prepare `events` and the initial `result` before compilation begins.
 *
 * This hook can inspect or mutate `events`, initialize compiler data,
 * or manipulate the initial `result` before event handlers run.
 *
 * @see {@linkcode Context}
 * @see {@linkcode CompileResult}
 * @see {@linkcode Event}
 *
 * @this {Context}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {CompileResult} result
 *  The current compilation result
 * @return {null | undefined}
 */
type Preprocess = (
  this: Context,
  events: Event[],
  result: CompileResult
) => null | undefined

export type { Preprocess as default }
