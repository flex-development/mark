/**
 * @file Type Aliases - Enter
 * @module fsm/compile/types/Enter
 */

import type {
  CompileContext,
  CompileValue,
  OnEnterError
} from '@flex-development/fsm/compile'
import type { Token } from '@flex-development/fsm/parse'

/**
 * Enter a compilation value.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode OnEnterError}
 * @see {@linkcode CompileValue}
 * @see {@linkcode Token}
 *
 * @this {CompileContext}
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
  this: CompileContext,
  value: CompileValue,
  token: Token,
  onError?: OnEnterError | null | undefined
) => undefined

export type { Enter as default }
