/**
 * @file Type Aliases - CreateValue
 * @module fsm/compile/types/CreateValue
 */

import type { CompileValue } from '@flex-development/fsm/compile'
import type { Token, TokenType } from '@flex-development/fsm/parse'

/**
 * Create a compilation value from a token.
 *
 * @see {@linkcode CompileValue}
 * @see {@linkcode Token}
 *
 * @template {CompileValue} [V]
 *  The created value
 * @template {TokenType} [T]
 *  The event token type
 *
 * @this {void}
 *
 * @param {Token<T>} token
 *  The event token
 * @return {V}
 *  The compilation value
 */
type CreateValue<
  V extends CompileValue = CompileValue,
  T extends TokenType = TokenType
> = (this: void, token: Token<T>) => V

export type { CreateValue as default }
