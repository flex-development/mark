/**
 * @file Type Aliases - AfterEnter
 * @module mark/parse/types/AfterEnter
 */

import type { Context, Token } from '@flex-development/mark/parse'

/**
 * Do something after `enter`ing a token.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {Token} token
 *  The open token
 * @return {undefined}
 */
type AfterEnter = (this: Context, token: Token) => undefined

export type { AfterEnter as default }
