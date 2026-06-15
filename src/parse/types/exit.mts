/**
 * @file Type Aliases - Exit
 * @module fsm/parse/types/Exit
 */

import type { Token, TokenType } from '@flex-development/fsm/parse'

/**
 * Close an open token.
 *
 * @see {@linkcode Token}
 * @see {@linkcode TokenType}
 *
 * @this {void}
 *
 * @param {TokenType} type
 *  The token type
 * @return {Token}
 *  The closed token
 */
type Exit = (this: void, type: TokenType) => Token

export type { Exit as default }
