/**
 * @file Interfaces - Config
 * @module mark/compile/interfaces/Config
 */

import type {
  Extension,
  Handle,
  Handles,
  Postprocess,
  Preprocess,
  Transform
} from '@flex-development/mark/compile'

/**
 * The event compilation configuration.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/mark/compile' {
 *    interface Extension {
 *      canContainEols: string[]
 *    }
 *  }
 *
 * @extends {Extension}
 */
interface Config extends Extension {
  /**
   * The list of listeners to call after an {@linkcode enter} handler.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  afterEnter: Handle[]

  /**
   * The list of listeners to call after an {@linkcode exit} handler.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  afterExit: Handle[]

  /**
   * The list of listeners to call before an {@linkcode enter} handler.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  beforeEnter: Handle[]

  /**
   * The list of listeners to call before an {@linkcode exit} handler.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  beforeExit: Handle[]

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
   * Handle the compilation result before {@linkcode transform}s are applied.
   *
   * @see {@linkcode Postprocess}
   */
  postprocess: Postprocess[]

  /**
   * Prepare events and the initial result before compilation begins.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess: Preprocess[]

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
