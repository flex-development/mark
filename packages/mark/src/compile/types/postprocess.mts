/**
 * @file Type Aliases - Postprocess
 * @module mark/compile/types/Postprocess
 */

import type { CompileResult, Context } from '@flex-development/mark/compile'
import type { Event } from '@flex-development/mark/parse'

/**
 * Handle the final compilation `result` before transforms are applied.
 *
 * @see {@linkcode Context}
 * @see {@linkcode CompileResult}
 * @see {@linkcode Event}
 *
 * @this {Context}
 *
 * @param {CompileResult} result
 *  The compilation result
 * @param {Event[]} events
 *  The list of events
 * @return {null | undefined | void}
 *  Nothing
 */
type Postprocess = (
  this: Context,
  result: CompileResult,
  events: Event[]
) => null | undefined | void

export type { Postprocess as default }
