/**
 * @file postprocess
 * @module examples/jack/postprocess
 */

import { subtokenize } from '@flex-development/mark-util-subtokenize'
import type { Event } from '@flex-development/mark/parse'

/**
 * Postprocess events.
 *
 * This function repeatedly calls {@linkcode subtokenize} until all embedded
 * content is parsed.
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
  return events
}

export default postprocess
