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
 * @see {@linkcode codes.vt}
 * @see {@linkcode codes.ff}
 * @see {@linkcode codes.nbsp}
 */
type Whitespace =
  | Space
  | typeof codes.horizontalTab
  | typeof codes.ht
  | typeof codes.vt
  | typeof codes.ff
  | typeof codes.nbsp

export type { Whitespace as default }
