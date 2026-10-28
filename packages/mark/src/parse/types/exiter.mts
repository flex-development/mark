/**
 * @file Type Aliases - Exiter
 * @module mark/parse/types/Exiter
 */

import type {
  Context,
  Effects,
  Tokenizer
} from '@flex-development/mark/parse'

/**
 * The final hook to run when a container must be closed.
 *
 * > 👉 **Note**: Like a {@linkcode Tokenizer}, but without `ok` and `nok`, and
 * > returns `undefined`.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Effects}
 *
 * @this {Context}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @return {undefined}
 */
type Exiter = (this: Context, effects: Effects) => undefined

export type { Exiter as default }
