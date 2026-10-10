/**
 * @file Type Aliases - Enter
 * @module mark/compile/types/Enter
 */

import type {
  CompileValue,
  Context,
  OnEnterError
} from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'

/**
 * Enter a compilation value.
 *
 * @see {@linkcode Context}
 * @see {@linkcode OnEnterError}
 * @see {@linkcode CompileValue}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {CompileValue} value
 *  The compilation value
 * @param {Token} token
 *  The token associated with `value`
 * @param {OnEnterError | null | undefined} [onError]
 *  Handle the case where another token is open, but closed by something else
 * @return {undefined}
 */
type Enter = (
  this: Context,
  value: CompileValue,
  token: Token,
  onError?: OnEnterError | null | undefined
) => undefined

export type { Enter as default }
