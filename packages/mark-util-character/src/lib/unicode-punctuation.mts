/**
 * @file unicodePunctuation
 * @module mark-util-character/lib/unicodePunctuation
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents Unicode punctuation.
 *
 * A ***Unicode punctuation*** is a character in the
 * following Unicode categories:
 *
 * - `Pc` (Punctuation, Connector)
 * - `Pd` (Punctuation, Dash)
 * - `Pe` (Punctuation, Close)
 * - `Pf` (Punctuation, Final quote)
 * - `Pi` (Punctuation, Initial quote)
 * - `Po` (Punctuation, Other)
 * - `Ps` (Punctuation, Open)
 *
 * or an ASCII punctuation (see {@linkcode asciiPunctuation}).
 *
 * @see {@linkcode CodeCheck}
 * @see {@linkcode Code}
 * @see https://www.fileformat.info/info/unicode/category/Pc/list.htm
 * @see https://www.fileformat.info/info/unicode/category/Pd/list.htm
 * @see https://www.fileformat.info/info/unicode/category/Pe/list.htm
 * @see https://www.fileformat.info/info/unicode/category/Pf/list.htm
 * @see https://www.fileformat.info/info/unicode/category/Pi/list.htm
 * @see https://www.fileformat.info/info/unicode/category/Po/list.htm
 * @see https://www.fileformat.info/info/unicode/category/Ps/list.htm
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  Whether the character code matches
 */
const unicodePunctuation: CodeCheck = checker(/\p{P}|\p{S}/u)

export default unicodePunctuation
