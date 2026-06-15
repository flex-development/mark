/**
 * @file Type Aliases - Opener
 * @module fsm/compile/types/Opener
 */

import type {
  CompileValue,
  CreateValue,
  Handle
} from '@flex-development/fsm/compile'
import type { TokenType } from '@flex-development/fsm/parse'

/**
 * Create an `enter` event handler.
 *
 * @see {@linkcode CompileValue}
 * @see {@linkcode CreateValue}
 * @see {@linkcode Handle}
 * @see {@linkcode TokenType}
 *
 * @template {CompileValue} V
 *  The value to create and enter via handler
 * @template {TokenType} T
 *  The event token type
 *
 * @this {void}
 *
 * @param {CreateValue<V, T>} create
 *  Create the value to enter
 * @param {Handle<T> | null | undefined} [and]
 *  An additional handle to run after entering the value
 * @return {Handle<T>}
 *  The `enter` event handler
 */
type Opener = <V extends CompileValue, T extends TokenType>(
  this: void,
  create: CreateValue<V, T>,
  and?: Handle<T> | null | undefined
) => Handle<T>

export type { Opener as default }
