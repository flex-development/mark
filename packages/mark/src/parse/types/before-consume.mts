/**
 * @file Type Aliases - BeforeConsume
 * @module mark/parse/types/BeforeConsume
 */

import type { Code, Context, Place } from '@flex-development/mark/parse'

/**
 * Do something before a character code is consumed.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Context}
 * @see {@linkcode Place}
 *
 * @this {Context}
 *
 * @param {Code} code
 *  The character code to be consumed
 * @param {Place} place
 *  The current place in the content
 * @return {undefined}
 */
type BeforeConsume = (this: Context, code: Code, place: Place) => undefined

export type { BeforeConsume as default }
