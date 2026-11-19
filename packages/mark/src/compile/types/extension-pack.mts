/**
 * @file Type Aliases - ExtensionPack
 * @module mark/compile/types/ExtensionPack
 */

import type {
  CreateExtensions,
  Extension
} from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'

/**
 * An extension, a factory function, or a list containing either.\
 * The list may also contain another list of extensions.
 *
 * @see {@linkcode CreateExtensions}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type ExtensionPack =
  | CreateExtensions
  | Extension
  | List<CreateExtensions | Extension | List<Extension>>

export type { ExtensionPack as default }
