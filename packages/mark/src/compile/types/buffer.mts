/**
 * @file Type Aliases - Buffer
 * @module mark/compile/types/Buffer
 */

import type { Context, Resume } from '@flex-development/mark/compile'

/**
 * Start capturing output into a temporary compilation value.
 *
 * Captured values can later be serialized with {@linkcode Resume}.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {undefined}
 */
type Buffer = (this: Context) => undefined

export type { Buffer as default }
