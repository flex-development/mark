/**
 * @file Type Aliases - TakeExtension
 * @module fsm/compile/types/TakeExtension
 */

import type { Config, Extension } from '@flex-development/fsm/compile'

/**
 * Merge an `extension` into `config`.
 *
 * @see {@linkcode Config}
 * @see {@linkcode Extension}
 *
 * @this {void}
 *
 * @param {Config} config
 *  The current configuration
 * @param {Extension} extension
 *  The extension to merge
 * @param {keyof Extension | undefined} [field]
 *  The current `extension` field
 * @return {null | undefined}
 */
type TakeExtension = (
  this: void,
  config: Config,
  extension: Extension,
  field?: keyof Extension | undefined
) => null | undefined

export type { TakeExtension as default }
