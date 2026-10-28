/**
 * @file Type Aliases - Exiter
 * @module mark-compiler/compile/types/Exiter
 */

import type { CompileValue, Context } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'

/**
 * Exit a compilation `value`.
 *
 * > 👉 **Note**: Both `value` and its corresponding `token` have already been
 * > removed from their respective stacks.
 *
 * @see {@linkcode CompileValue}
 * @see {@linkcode Context}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {CompileValue} value
 *  The exited compilation value
 * @param {Token} token
 *  The token associated with the compilation value
 * @return {undefined}
 */
type Exiter = (this: Context, value: CompileValue, token: Token) => undefined

export type { Exiter as default }
