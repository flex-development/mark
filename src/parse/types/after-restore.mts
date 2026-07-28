/**
 * @file Type Aliases - AfterRestore
 * @module mark/parse/types/AfterRestore
 */

import type { Context } from '@flex-development/mark/parse'

/**
 * Do something after restoring state.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {undefined}
 */
type AfterRestore = (this: Context) => undefined

export type { AfterRestore as default }
