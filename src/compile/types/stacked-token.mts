/**
 * @file Type Aliases - StackedToken
 * @module fsm/compile/types/StackedToken
 */

import type { OnEnterError } from '@flex-development/fsm/compile'
import type { Token } from '@flex-development/fsm/parse'

/**
 * List containing an open token on the stack,
 * and an optional error handler to use if the token isn't closed properly.
 *
 * @see {@linkcode OnEnterError}
 * @see {@linkcode Token}
 */
type StackedToken = [token: Token, handler: OnEnterError | null | undefined]

export type { StackedToken as default }
