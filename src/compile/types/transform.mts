/**
 * @file Type Aliases - Transform
 * @module fsm/compile/types/Transform
 */

import type { CompileResult } from '@flex-development/fsm/compile'

/**
 * Transform a compilation result.
 *
 * > 👉 **Note**: Returning `null` or `undefined` will preserve `result`.
 *
 * @see {@linkcode CompileResult}
 *
 * @this {void}
 *
 * @param {CompileResult} result
 *  The compilation result to transform
 * @return {CompileResult | null | undefined}
 *  The new or transformed result, or nothing (in which case `result` is used)
 */
type Transform = (
  this: void,
  result: CompileResult
) => CompileResult | null | undefined

export type { Transform as default }
