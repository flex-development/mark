/**
 * @file Type Aliases - AfterStore
 * @module mark/parse/types/AfterStore
 */

import type { Context } from '@flex-development/mark/parse'

/**
 * Do something after storing state.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {undefined}
 */
type AfterStore = (this: Context) => undefined

export type { AfterStore as default }
