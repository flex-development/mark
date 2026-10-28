/**
 * @file Type Aliases - Closer
 * @module mark/ast/types/Closer
 */

import type { Handle } from '@flex-development/mark/ast'
import type { TokenType } from '@flex-development/mark/parse'

/**
 * Create an `exit` event handler.
 *
 * @see {@linkcode Handle}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T
 *  The event token type
 *
 * @this {void}
 *
 * @param {Handle<T> | null | undefined} [pre]
 *  An additional handle to run before exiting the compilation value
 * @return {Handle<T>}
 *  The `exit` event handler
 */
type Closer = <T extends TokenType>(
  this: void,
  pre?: Handle<T> | null | undefined
) => Handle<T>

export type { Closer as default }
