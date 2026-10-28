/**
 * @file Type Aliases - BeforeEnter
 * @module mark/parse/types/BeforeEnter
 */

import type {
  Context,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'

/**
 * Do something before `enter`ing a token.
 *
 * @see {@linkcode Context}
 * @see {@linkcode TokenFields}
 * @see {@linkcode TokenType}
 *
 * @this {Context}
 *
 * @param {TokenType} type
 *  The token type
 * @param {TokenFields} fields
 *  The token fields
 * @return {undefined}
 */
type BeforeEnter = (
  this: Context,
  type: TokenType,
  fields: TokenFields
) => undefined

export type { BeforeEnter as default }
