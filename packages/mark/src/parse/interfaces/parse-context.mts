/**
 * @file Interfaces - ParseContext
 * @module mark/parse/interfaces/ParseContext
 */

import type {
  FullNormalizedExtension,
  Parsers
} from '@flex-development/mark/parse'

/**
 * Context object to assist with parsing.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface ParseContext {
 *      lazy: Record<number, boolean>
 *    }
 *  }
 *
 * @see {@linkcode Parsers}
 *
 * @extends {Parsers}
 */
interface ParseContext extends Parsers {
  /**
   * The normalized syntax extension.
   *
   * @see {@linkcode FullNormalizedExtension}
   */
  constructs: FullNormalizedExtension
}

export type { ParseContext as default }
