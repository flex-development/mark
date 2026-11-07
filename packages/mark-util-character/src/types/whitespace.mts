/**
 * @file Type Aliases - Whitespace
 * @module mark-util-character/types/Whitespace
 */

import type { Space } from '@flex-development/mark-util-character'
import type { codes } from '@flex-development/mark-util-symbol'

/**
 * Union of codes representing whitespace.
 *
 * @see {@linkcode codes.horizontalTab}
 * @see {@linkcode codes.ht}
 */
type Whitespace =
  | Space
  | typeof codes.horizontalTab
  | typeof codes.ht

export type { Whitespace as default }
