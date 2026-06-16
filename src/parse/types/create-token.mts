/**
 * @file Type Aliases - CreateToken
 * @module fsm/parse/types/CreateToken
 */

import type {
  Token,
  TokenInfo,
  TokenType
} from '@flex-development/fsm/parse'

/**
 * Create a new token.
 *
 * @see {@linkcode Token}
 * @see {@linkcode TokenInfo}
 * @see {@linkcode TokenType}
 *
 * @this {void}
 *
 * @param {TokenType} type
 *  The token type
 * @param {TokenInfo | null | undefined} [info]
 *  The token info
 * @return {Token}
 *  The new token
 */
type CreateToken = (
  this: void,
  type: TokenType,
  info?: TokenInfo | null | undefined
) => Token

export type { CreateToken as default }
