/**
 * @file Type Aliases - BeforeStore
 * @module mark/parse/types/BeforeStore
 */

import type { Context } from '@flex-development/mark/parse'

/**
 * Do something before storing state.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {undefined}
 */
type BeforeStore = (this: Context) => undefined

export type { BeforeStore as default }
