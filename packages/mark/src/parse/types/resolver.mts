/**
 * @file Type Aliases - Resolver
 * @module mark/parse/types/Resolver
 */

import type {
  Construct,
  Context,
  Event
} from '@flex-development/mark/parse'

/**
 * Handle events coming from `tokenize`.
 *
 * @see {@linkcode Construct.tokenize}
 * @see {@linkcode Context}
 * @see {@linkcode Event}
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {Context} context
 *  The tokenize context
 * @return {Event[]}
 *  The list of changed events
 */
type Resolver = (this: void, events: Event[], context: Context) => Event[]

export type { Resolver as default }
