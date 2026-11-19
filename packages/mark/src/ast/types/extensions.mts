/**
 * @file Type Aliases - Extensions
 * @module mark/ast/types/Extensions
 */

import type {
  CreateExtensions,
  Extension,
  ExtensionPack,
  ExtensionPackList
} from '@flex-development/mark/ast'

/**
 * An extension object, an extension pack list, or a factory function.
 *
 * @see {@linkcode CreateExtensions}
 * @see {@linkcode ExtensionPackList}
 * @see {@linkcode ExtensionPack}
 * @see {@linkcode Extension}
 */
type Extensions =
  | CreateExtensions
  | Extension
  | ExtensionPack
  | ExtensionPackList

export type { Extensions as default }
