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
 * @return {code is typeof codes.horizontalTab | typeof codes.ht}
 *  Whether `code` is {@linkcode codes.horizontalTab} or {@linkcode codes.ht}
 */
function htab(
  this: void,
  code: unknown
): code is typeof codes.horizontalTab | typeof codes.ht {
  return code === codes.horizontalTab || code === codes.ht
}

export default htab
