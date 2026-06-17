/**
 * @file Interfaces - TokenTypeMap
 * @module fsm/parse/interfaces/TokenTypeMap
 */

/**
 * Registry of token types.
 *
 * This interface can be augmented to register custom token types.
 *
 * @example
 *  declare module '@flex-development/fsm/parse' {
 *    interface TokenTypeMap {
 *      whitespace: tt.whitespace
 *    }
 *  }
 */
interface TokenTypeMap {
  /**
   * Forbidden token type.
   *
   * The ecosystem uses the `null` key to support additional functionality.
   */
  null: never
}

export type { TokenTypeMap as default }
