/**
 * @file Type Aliases - Buffer
 * @module mark/ast/types/Buffer
 */

import type { Context } from '@flex-development/mark/ast'

/**
 * Capture some of the output data.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {undefined}
 */
type Buffer = (this: Context) => undefined

export type { Buffer as default }
