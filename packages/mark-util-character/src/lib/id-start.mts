/**
 * @file idStart
 * @module mark-util-character/lib/idStart
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code can start an identifier.
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
const idStart: CodeCheck = checker(/[$_\p{ID_Start}]/u)

export default idStart
