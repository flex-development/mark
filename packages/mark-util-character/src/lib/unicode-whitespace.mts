/**
 * @file unicodeWhitespace
 * @module mark-util-character/lib/unicodeWhitespace
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents Unicode whitespace.
 *
 * A ***Unicode whitespace*** is a character in the Unicode `Zs` (Separator,
 * Space) category or one of the following:
 *
 * - `U+0009` CHARACTER TABULATION (`HT`)
 * - `U+000A` LINE FEED (`LF`),
 * - `U+000C` FORM FEED (`FF`)
 * - `U+000D` CARRIAGE RETURN (`CR`)
 *
 * @see {@linkcode CodeCheck}
 * @see {@linkcode Code}
 * @see https://www.fileformat.info/info/unicode/category/Zs/list.htm
 * @see https://www.unicode.org/versions
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  Whether the character code matches
 */
const unicodeWhitespace: CodeCheck = checker(/\s/)

export default unicodeWhitespace
