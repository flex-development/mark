/**
 * @file Interfaces - Config
 * @module fsm/compile/interfaces/Config
 */

import type {
  Extension,
  Handles,
  Transform
} from '@flex-development/fsm/compile'

/**
 * The event compilation configuration.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm/compile' {
 *    interface Extension {
 *      canContainEols: string[]
 *    }
 *  }
 *
 * @extends {Extension}
 */
interface Config extends Extension {
  /**
   * Record, where each key is a token type
   * and each value is the handler to call when entering a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  enter: Handles

  /**
   * Record, where each key is a token type
   * and each value is the handler to call when exiting a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  exit: Handles

  /**
   * The list of transforms to apply.
   *
   * Transforms are applied to the final compilation result.
   *
   * @see {@linkcode Transform}
   *
   * @override
   */
  transforms: Transform[]
}

export type { Config as default }
