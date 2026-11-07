/**
 * @file Test Utilities - snapshotEvents
 * @module examples/splat/tests/utils/snapshotEvents
 */

import { ev } from '@flex-development/mark-util-symbol'
import type {
  Event,
  EventType,
  Token
} from '@flex-development/mark/parse'
import { tt } from '@flex-development/splat/symbol'

/**
 * Get a snapshot-compliant list of events.
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The list of events
 * @return {[EventType, Token][]}
 *  The list of event types and tokens
 */
function snapshotEvents(this: void, events: Event[]): [EventType, Token][] {
  return events.map(([event, token, self]) => {
    if (
      event === ev.enter &&
      token.type !== tt.bracketExpression &&
      token.type !== tt.characterClass &&
      token.type !== tt.collatingSymbol &&
      token.type !== tt.eoc &&
      token.type !== tt.equivalenceClass &&
      token.type !== tt.escape &&
      token.type !== tt.escapeMarker &&
      token.type !== tt.literal &&
      token.type !== tt.rangeExpression &&
      token.type !== tt.segment &&
      !Object.prototype.hasOwnProperty.call(token, 'value')
    ) {
      token.value = self.sliceSerialize(token)
    }

    Object.defineProperties(token, {
      _tokenizer: { enumerable: false, writable: true },
      next: { enumerable: false, writable: true },
      previous: { enumerable: false, writable: true }
    })

    return [event, token] as const
  })
}

export default snapshotEvents
