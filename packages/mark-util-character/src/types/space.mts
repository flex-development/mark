/**
 * @file Type Aliases - Space
 * @module mark-util-character/types/Space
 */

import type { codes } from '@flex-development/mark-util-symbol'

/**
 * Union of codes representing space.
 *
 * @see {@linkcode codes.space}
 * @see {@linkcode codes.virtualSpace}
 */
type Space = typeof codes.space | typeof codes.virtualSpace

export type { Space as default }
