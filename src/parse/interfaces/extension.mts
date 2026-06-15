/**
 * @file Interfaces - Extension
 * @module fsm/parse/interfaces/Extension
 */

import type {
  ContentExtensions,
  Disable
} from '@flex-development/fsm/parse'

/**
 * A syntax extension.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm/parse' {
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
}

export type { Extension as default }
