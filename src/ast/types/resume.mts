/**
 * @file Type Aliases - Resume
 * @module mark/ast/types/Resume
 */

import type { Context } from '@flex-development/mark/ast'

/**
 * Stop capturing output and serialize the captured node.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {string | null | undefined}
 *  The serialized node
 */
type Resume = (this: Context) => string | null | undefined

export type { Resume as default }
