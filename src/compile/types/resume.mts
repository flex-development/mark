/**
 * @file Type Aliases - Resume
 * @module fsm/compile/types/Resume
 */

import type { CompileContext } from '@flex-development/fsm/compile'

/**
 * Stop capturing output and serialize the captured value.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {string | null | undefined}
 *  The serialized output
 */
type Resume = (this: CompileContext) => string | null | undefined

export type { Resume as default }
