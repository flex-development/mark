/**
 * @file Type Aliases - Tokenizer
 * @module mark/parse/types/Tokenizer
 */

import type {
  Context,
  Effects,
  State
} from '@flex-development/mark/parse'

/**
 * Set up a state machine to handle character codes streaming in.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Effects}
 * @see {@linkcode State}
 *
 * @this {Context}
 *
 * @param {Effects} effects
 *  The context object to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
type Tokenizer = (
  this: Context,
  effects: Effects,
  ok: State,
  nok: State
) => State

export type { Tokenizer as default }
