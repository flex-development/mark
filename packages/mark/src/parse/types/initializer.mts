/**
 * @file Type Aliases - Initializer
 * @module mark/parse/types/Initializer
 */

import type {
  Context,
  Effects,
  State,
  Tokenizer
} from '@flex-development/mark/parse'

/**
 * Set up an initial state machine.
 *
 * > 👉 **Note**: Like a {@linkcode Tokenizer}, but without `ok` and `nok`.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Effects}
 * @see {@linkcode State}
 *
 * @this {Context}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @return {State}
 *  The initial state
 */
type Initializer = (this: Context, effects: Effects) => State

export type { Initializer as default }
