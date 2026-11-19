/**
 * @file Type Aliases - ExtensionList
 * @module mark/ast/types/ExtensionList
 */

import type { CreateExtensions, Extension } from '@flex-development/mark/ast'
import type { List } from '@flex-development/mark/core'

/**
 * A list of extensions.
 *
 * @see {@linkcode CreateExtensions}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type ExtensionList = List<Extension | List<Extension>>

export type { ExtensionList as default }
