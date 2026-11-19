/**
 * @file asciiControl
 * @module mark-util-character/lib/asciiControl
 */

import { codes } from '@flex-development/mark-util-symbol'
import type { CodeCheck } from '@flex-development/mark/parse'
import eos from './eos.mts'
import isCode from './is-code.mts'

/**
 * Check whether a character code is an ASCII control character.
 *
 * An ***ASCII control*** is a character in the inclusive range `U+0000` NULL
 * (`NUL`) to `U+001F` (`US`), or `U+007F` (`DEL`).
 *
 * @see {@linkcode CodeCheck}
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {boolean}
 *  Whether the character code matches
 */
function asciiControl(this: void, code: unknown): boolean {
  if (eos(code) || !isCode(code)) return false
  if (code === codes.del) return true // control character DEL.

  // special Space codes (which have negative values) and C0.
  return code >= codes.carriageReturn && code < codes.space
}

export default asciiControl
