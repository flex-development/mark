/**
 * @file Type Aliases - Handle
 * @module mark/compile/types/Handle
 */

import type { Context } from '@flex-development/mark/compile'
import type { Token, TokenType } from '@flex-development/mark/parse'

/**
 * Handle an event token.
 *
 * @see {@linkcode Context}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T]
 *  The event token type
 *
 * @this {Context}
 *
 * @param {Token<T>} token
 *  The event token
 * @return {undefined}
 */
type Handle<T extends TokenType = TokenType> = (
  this: Context,
  token: Token<T>
) => undefined

export type { Handle as default }
