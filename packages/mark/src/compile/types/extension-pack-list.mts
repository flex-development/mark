/**
 * @file Type Aliases - ExtensionPackList
 * @module mark/compile/types/ExtensionPackList
 */

import type { ExtensionPack } from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'

/**
 * A list of extension packs.
 *
 * @see {@linkcode ExtensionPack}
 * @see {@linkcode List}
 */
type ExtensionPackList = List<ExtensionPack>

export type { ExtensionPackList as default }
