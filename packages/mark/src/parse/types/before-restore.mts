/**
 * @file Type Aliases - BeforeRestore
 * @module mark/parse/types/BeforeRestore
 */

import type { Context } from '@flex-development/mark/parse'

/**
 * Do something before restoring state.
 *
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @return {undefined}
 */
type BeforeRestore = (this: Context) => undefined

export type { BeforeRestore as default }
