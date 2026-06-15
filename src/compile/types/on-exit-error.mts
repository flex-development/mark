/**
 * @file Type Aliases - OnExitError
 * @module fsm/compile/types/OnExitError
 */

import type { CompileContext } from '@flex-development/fsm/compile'
import type { Token, TokenType } from '@flex-development/fsm/parse'

/**
 * Handle the case where the `right` token is open,
 * but is closed by exiting the `left` token.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [L]
 *  The exiting token type
 * @template {TokenType} [R]
 *  The open token type
 *
 * @this {CompileContext}
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
  this: CompileContext,
  left: Token<L>,
  right: Token<R>
) => undefined

export type { OnExitError as default }
