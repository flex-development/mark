/**
 * @file Type Aliases - Serialize
 * @module mark-util-character/types/Serialize
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * Serialize a character code.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to serialize
 * @return {string}
 *  The character produced from `code`
 */
type Serialize = (this: void, code: Code) => string

export type { Serialize as default }
