/**
 * @file Interfaces - Extension
 * @module fsm/compile/interfaces/Extension
 */

import type { Handles, Transform } from '@flex-development/fsm/compile'
import type { List } from '@flex-development/fsm/parse'

/**
 * An event compilation extension.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm/compile' {
 *    interface Extension {
 *      canContainEols?: string[] | null | undefined
 *    }
 *  }
 */
interface Extension {
  /**
   * Record, where each key is a token type
   * and each value is the handler to call when entering a token.
   *
   * @see {@linkcode Handles}
   */
  enter?: Handles | null | undefined

  /**
   * Record, where each key is a token type
   * and each value is the handler to call when exiting a token.
   *
   * @see {@linkcode Handles}
   */
  exit?: Handles | null | undefined

  /**
   * The list of transforms to apply.
   *
   * Transforms are applied to the final compilation result.
   *
   * @see {@linkcode List}
   * @see {@linkcode Transform}
   */
  transforms?: List<Transform> | null | undefined
}

export type { Extension as default }
