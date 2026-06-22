/**
 * @file Interfaces - TokenFields
 * @module mark/parse/interfaces/TokenFields
 */

/**
 * Registry of token fields.
 *
 * This interface can be augmented to register custom token fields.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface TokenFields {
 *      _tokenizer?: Context | null | undefined
 *      contentType?: ContentType | null | undefined
 *      next?: Token | null | undefined
 *      previous?: Token | null | undefined
 *    }
 *  }
 */
interface TokenFields {}

export type { TokenFields as default }
