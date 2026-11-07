/**
 * @file postprocess
 * @module examples/jack/postprocess
 */

import { tt } from '@flex-development/jack/symbol'
import { splice } from '@flex-development/mark-util-chunked'
import { subtokenize } from '@flex-development/mark-util-subtokenize'
import { ev } from '@flex-development/mark-util-symbol'
import type { Event } from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

/**
 * Postprocess events.
 *
 * This function repeatedly calls {@linkcode subtokenize} until all embedded
 * content is parsed.
 *
 * @todo resolve object members
 *
 * @see {@linkcode Event}
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The current list of events
 * @return {Event[]}
 *  The list of changed events
 */
function postprocess(this: void, events: Event[]): Event[] {
  while (!subtokenize(events)); // tokenize subtokens.

  /**
   * The index of the current event.
   *
   * @var {number} index
   */
  let index: number = -1

  while (++index < events.length) {
    assert(events[index], 'expected `events[index]`')
    const [event, token] = events[index]!

    // remove the `eoc` event pack if it isn't the last pack.
    if (
      event === ev.enter &&
      token.type === tt.eoc &&
      events[index + 2] !== undefined
    ) {
      splice(events, index, 2) // drop `enter` and `exit` event.
    }
  }

  return events
}

export default postprocess
