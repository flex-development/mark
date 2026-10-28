/**
 * @file htab
 * @module mark-util-character/lib/htab
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` represents a horizontal tab.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.ht | typeof codes.vht}
 *  `true` if `code` is {@linkcode codes.horizontalTab} (aka `codes.vht`)
 *  or {@linkcode codes.ht}, `false` otherwise
 */
function htab(
  this: void,
  code: unknown
): code is typeof codes.ht | typeof codes.vht {
  return code === codes.ht || code === codes.vht
}

export default htab
