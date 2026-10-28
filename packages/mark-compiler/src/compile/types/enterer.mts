/**
 * @file Type Aliases - Enterer
 * @module mark-compiler/compile/types/Enterer
 */

import type { CompileValue, Context } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'

/**
 * Enter a compilation value.
 *
 * @see {@linkcode Context}
 * @see {@linkcode CompileValue}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {CompileValue} value
 *  The compilation value
 * @param {Token} token
 *  The token associated with `value`
 * @return {undefined}
 */
type Enterer = (this: Context, value: CompileValue, token: Token) => undefined

export type { Enterer as default }
