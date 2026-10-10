/**
 * @file Type Aliases - OnExitError
 * @module mark/compile/types/OnExitError
 */

import type { Context } from '@flex-development/mark/compile'
import type { Token, TokenType } from '@flex-development/mark/parse'

/**
 * Handle the case where the `right` token is open,
 * but is closed by exiting the `left` token.
 *
 * @see {@linkcode Context}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [L]
 *  The exiting token type
 * @template {TokenType} [R]
 *  The open token type
 *
 * @this {Context}
 *
 * @param {Token<L>} left
 *  The exiting token
 * @param {Token<R>} right
 *  The open token
 * @return {undefined}
 */
type OnExitError<
  L extends TokenType = TokenType,
  R extends TokenType = TokenType
> = (
  this: Context,
  left: Token<L>,
  right: Token<R>
) => undefined

export type { OnExitError as default }
