/**
 * @file Type Aliases - ExtensionList
 * @module mark/compile/types/ExtensionList
 */

import type { Extension } from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'

/**
 * A list of extensions.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type ExtensionList = List<Extension | List<Extension>>

export type { ExtensionList as default }
