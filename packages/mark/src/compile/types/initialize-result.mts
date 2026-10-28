/**
 * @file Type Aliases - InitializeResult
 * @module mark/compile/types/InitializeResult
 */

import type { CompileResult, Context } from '@flex-development/mark/compile'
import type { Event } from '@flex-development/mark/parse'

/**
 * Create the initial compilation result.
 *
 * @see {@linkcode Context}
 * @see {@linkcode CompileResult}
 * @see {@linkcode Event}
 *
 * @this {Context}
 *
 * @param {Event[]} events
 *  The initial list of events
 * @return {CompileResult}
 *  The initial compilation result
 */
type InitializeResult = (this: Context, events: Event[]) => CompileResult

export type { InitializeResult as default }
