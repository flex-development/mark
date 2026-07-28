/**
 * @file Type Aliases - AfterConsume
 * @module mark/parse/types/AfterConsume
 */

import type { Code, Context, Place } from '@flex-development/mark/parse'

/**
 * Do something after a character code is consumed.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Context}
 * @see {@linkcode Place}
 *
 * @this {Context}
 *
 * @param {Code} code
 *  The consumed character code
 * @param {Place} place
 *  The current place in the content
 * @return {undefined}
 */
type AfterConsume = (this: Context, code: Code, place: Place) => undefined

export type { AfterConsume as default }
