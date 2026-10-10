/**
 * @file Type Aliases - Resume
 * @module mark/compile/types/Resume
 */

import type { Context } from '@flex-development/mark/compile'

/**
 * Stop capturing output and serialize the captured value.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {string | null | undefined}
 *  The serialized output
 */
type Resume = (this: Context) => string | null | undefined

export type { Resume as default }
