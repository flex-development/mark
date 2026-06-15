/**
 * @file Type Aliases - Buffer
 * @module fsm/compile/types/Buffer
 */

import type { CompileContext, Resume } from '@flex-development/fsm/compile'

/**
 * Start capturing output into a temporary compilation value.
 *
 * Captured values can later be serialized with {@linkcode Resume}.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {undefined}
 */
type Buffer = (this: CompileContext) => undefined

export type { Buffer as default }
