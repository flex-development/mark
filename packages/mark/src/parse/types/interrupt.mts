/**
 * @file Type Aliases - Interrupt
 * @module mark/parse/types/Interrupt
 */

import type { Constructs, State } from '@flex-development/mark/parse'

/**
 * Interrupt deals with several constructs, and speculatively tries to tokenize
 * according to those constructs.
 *
 * If a construct succeeds, the `ok` state is switched to.\
 * Otherwise, the `nok` state is switched to.
 *
 * In both cases, any tokens produced are not used and the tokenizer reverts
 * back to its previous state before `ok` or `nok` is switched to.
 *
 * @see {@linkcode Constructs}
 * @see {@linkcode State}
 *
 * @this {void}
 *
 * @param {Constructs} construct
 *  The construct(s) to try
 * @param {State} ok
 *  The successful tokenization state
 * @param {State | undefined} [nok]
 *  The failed tokenization state
 * @return {State}
 *  The next state
 */
type Interrupt = (
  this: void,
  construct: Constructs,
  ok: State,
  nok?: State | undefined
) => State

export type { Interrupt as default }
