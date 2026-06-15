/**
 * @file Type Aliases - TokenFactory
 * @module fsm/parse/types/TokenFactory
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
type TokenFactory = (
  this: void,
  type: TokenType,
  info?: TokenInfo | null | undefined
) => Token

export type { TokenFactory as default }
