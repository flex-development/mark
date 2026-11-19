/**
 * @file Type Aliases - ExtensionPackList
 * @module mark/ast/types/ExtensionPackList
 */

import type { ExtensionPack } from '@flex-development/mark/ast'
import type { List } from '@flex-development/mark/core'

/**
 * A list of extension packs.
 *
 * @see {@linkcode ExtensionPack}
 * @see {@linkcode List}
 */
type ExtensionPackList = List<ExtensionPack>

export type { ExtensionPackList as default }
