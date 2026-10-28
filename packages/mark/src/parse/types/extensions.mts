/**
 * @file Type Aliases - Extensions
 * @module mark/parse/types/Extensions
 */

import type { List } from '@flex-development/mark/core'
import type { Extension } from '@flex-development/mark/parse'

/**
 * A syntax extension or a list of syntax extensions.
 *
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type Extensions = Extension | List<Extension>

export type { Extensions as default }
