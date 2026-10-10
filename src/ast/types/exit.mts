/**
 * @file Type Aliases - Exit
 * @module mark/ast/types/Exit
 */

import type { Context, OnExitError } from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'

/**
 * Exit a node.
 *
 * @see {@linkcode Context}
 * @see {@linkcode OnExitError}
 * @see {@linkcode Token}
 *
 * @this {Context}
 *
 * @param {Token} token
 *  The token associated with the node
 * @param {OnExitError | null | undefined} [onError]
 *  Handle the case where another token is open
 * @return {undefined}
 */
type Exit = (
  this: Context,
  token: Token,
  onError?: OnExitError | null | undefined
) => undefined

export type { Exit as default }
