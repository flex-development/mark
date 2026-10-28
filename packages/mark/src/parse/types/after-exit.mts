/**
 * @file Type Aliases - AfterExit
 * @module mark/parse/types/AfterExit
 */

import type { Context, Token } from '@flex-development/mark/parse'

/**
 * Do something after `exit`ing a token.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {Token} token
 *  The closed token
 * @return {undefined}
 */
type AfterExit = (this: Context, token: Token) => undefined

export type { AfterExit as default }
