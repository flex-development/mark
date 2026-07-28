/**
 * @file Type Aliases - BeforeExit
 * @module mark/parse/types/BeforeExit
 */

import type { Context, Token } from '@flex-development/mark/parse'

/**
 * Do something before `exit`ing a token.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {Token} token
 *  The token to be closed
 * @return {undefined}
 */
type BeforeExit = (this: Context, token: Token) => undefined

export type { BeforeExit as default }
