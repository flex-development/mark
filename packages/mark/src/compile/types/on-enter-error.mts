/**
 * @file Type Aliases - OnEnterError
 * @module mark/compile/types/OnEnterError
 */

import type { Context } from '@flex-development/mark/compile'
import type { Token, TokenType } from '@flex-development/mark/parse'

/**
 * Handle the case where the `right` token is open,
 * but is closed by the `left` token, or because end of content was reached.
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
 * @param {Token<L> | undefined} left
 *  The exiting token
 * @param {Token<R>} right
 *  The open token
 * @return {undefined}
 */
type OnEnterError<
  L extends TokenType = TokenType,
  R extends TokenType = TokenType
> = (
  this: Context,
  left: Token<L> | undefined,
  right: Token<R>
) => undefined

export type { OnEnterError as default }
