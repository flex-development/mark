/**
 * @file idContinue
 * @module mark-util-character/lib/idContinue
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code can continue an identifier.
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
const idContinue: CodeCheck = checker(/[$\p{ID_Continue}]/u)

export default idContinue
