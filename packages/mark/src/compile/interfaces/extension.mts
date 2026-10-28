/**
 * @file Interfaces - Extension
 * @module mark/compile/interfaces/Extension
 */

import type { Handle, Handles, Transform } from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'

/**
 * An event compilation extension.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/mark/compile' {
 *    interface Extension {
 *      canContainEols?: string[] | null | undefined
 *    }
 *  }
 */
interface Extension {
  /**
   * The listener, or listeners, to call after an {@linkcode enter} handler.
   *
   * @see {@linkcode Handle}
   * @see {@linkcode List}
   */
  afterEnter?: Handle | List<Handle> | null | undefined

  /**
   * The listener, or listeners, to call after an {@linkcode exit} handler.
   *
   * @see {@linkcode Handle}
   * @see {@linkcode List}
   */
  afterExit?: Handle | List<Handle> | null | undefined

  /**
   * The listener, or listeners, to call before an {@linkcode enter} handler.
   *
   * @see {@linkcode Handle}
   * @see {@linkcode List}
   */
  beforeEnter?: Handle | List<Handle> | null | undefined

  /**
   * The listener, or listeners, to call before an {@linkcode exit} handler.
   *
   * @see {@linkcode Handle}
   * @see {@linkcode List}
   */
  beforeExit?: Handle | List<Handle> | null | undefined

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
