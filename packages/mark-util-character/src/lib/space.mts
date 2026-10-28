/**
 * @file space
 * @module mark-util-character/lib/space
 */

import type { Space } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` represents space.
 *
 * @see {@linkcode Space}
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is Space}
 *  `true` if `code` is space code, `false` otherwise
 */
function space(this: void, code: unknown): code is Space {
  return code === codes.space || code === codes.virtualSpace
}

export default space
