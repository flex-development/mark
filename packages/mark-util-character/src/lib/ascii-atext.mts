/**
 * @file asciiAtext
 * @module mark-util-character/lib/asciiAtext
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents an ASCII atext.
 *
 * ***atext*** is an ASCII alphanumeric (see {@linkcode asciiAlphanumeric}),
 * or a character in the following inclusive ranges:
 *
 * - `U+0021` EXCLAMATION MARK (`!`)
 * - `U+0023` NUMBER SIGN (`#`) to `U+0027` APOSTROPHE (`'`)
 * - `U+002A` ASTERISK (`*`)
 * - `U+002B` PLUS SIGN (`+`)
 * - `U+002D` DASH (`-`)
 * - `U+002F` SLASH (`/`)
 * - `U+003D` EQUALS TO (`=`)
 * - `U+003F` QUESTION MARK (`?`)
 * - `U+005E` CARET (`^`) to `U+0060` GRAVE ACCENT (`` ` ``)
 * - `U+007B` LEFT CURLY BRACE (`{`) to `U+007E` TILDE (`~`)
 *
 * See <https://tools.ietf.org/html/rfc5322> for more info.
 *
 * @see {@linkcode CodeCheck}
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  Whether the character code matches
 */
const asciiAtext: CodeCheck = checker(/[!#-'*+\--9=?A-Z^-~]/)

export default asciiAtext
