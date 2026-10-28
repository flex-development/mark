/**
 * @file Interfaces - Extension
 * @module mark/parse/interfaces/Extension
 */

import type {
  ContentExtensions,
  Disable,
  Settings
} from '@flex-development/mark/parse'

/**
 * A syntax extension.
 *
 * Syntax extensions are objects whose fields are typically the names of hooks,
 * referring to where constructs "hook" into. The fields at such objects are
 * character codes, mapping to constructs as values.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface Extension {
 *      attentionMarkers?: AttentionMarkers | null | undefined
 *    }
 *  }
 *
 * @see {@linkcode ContentExtensions}
 *
 * @extends {ContentExtensions}
 */
interface Extension extends ContentExtensions {
  /**
   * The disabled construct settings.
   *
   * @see {@linkcode Disable}
   */
  disable?: Disable | null | undefined

  /**
   * Additional settings.
   *
   * @see {@linkcode Settings}
   */
  settings?: Settings | null | undefined
}

export type { Extension as default }
