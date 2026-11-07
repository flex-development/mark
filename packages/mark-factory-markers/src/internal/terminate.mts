/**
 * @file Internal - terminate
 * @module mark-factory-markers/internal/terminate
 */

import type { State } from '@flex-development/mark/parse'

/**
 * Get the final marker sequence state.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {boolean | null | undefined} optional
 *  Whether an unexpected marker should successfully terminate a sequence
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The next state
 */
function terminate(
  this: void,
  optional: boolean | null | undefined,
  ok: State,
  nok: State
): State {
  return optional ? ok : nok
}

export default terminate
