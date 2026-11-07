/**
 * @file Interfaces - TokenFields
 * @module mark/parse/interfaces/TokenFields
 */

import type { IfNever } from '@flex-development/mark/core'
import type {
  ContentType,
  Context,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'

/**
 * Registry of token fields.
 *
 * This interface can be augmented to register custom token fields.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface TokenFields {
 *      value?: string | null | undefined
 *    }
 *  }
 */
interface TokenFields {
  /**
   * The connected tokenizer used when dealing with linked tokens.
   *
   * @see {@linkcode Context}
   * @see {@linkcode IfNever}
   * @see {@linkcode TokenizeContext}
   */
  _tokenizer?: IfNever<Context, TokenizeContext, Context> | null | undefined

  /**
   * Declare the token as having content of a certain type.
   *
   * @see {@linkcode ContentType}
   */
  contentType?: ContentType | null | undefined

  /**
   * The next token in a list of linked tokens.
   *
   * @see {@linkcode Token}
   */
  next?: Token | null | undefined

  /**
   * The previous token in a list of linked tokens.
   *
   * @see {@linkcode Token}
   */
  previous?: Token | null | undefined
}

export type { TokenFields as default }
