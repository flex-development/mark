/**
 * @file asciiPunctuation
 * @module mark-util-character/lib/asciiPunctuation
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents ASCII punctuation.
 *
 * An ***ASCII punctuation*** is a character in the following inclusive ranges:
 *
 * - `U+0021` EXCLAMATION MARK (`!`) to `U+002F` SLASH (`/`)
 * - `U+003A` COLON (`:`) to `U+0040` AT SIGN (`@`)
 * - `U+005B` LEFT SQUARE BRACKET (`[`) to `U+0060` GRAVE ACCENT (`` ` ``)
 * - `U+007B` LEFT CURLY BRACE (`{`) to `U+007E` TILDE (`~`)
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
const asciiPunctuation: CodeCheck = checker(/[!-/:-@[-`{-~]/)

export default asciiPunctuation
