/**
 * @file Type Aliases - Event
 * @module mark/parse/types/Event
 */

import type {
  Context,
  EventType,
  Token,
  TokenType
} from '@flex-development/mark/parse'

/**
 * The start or end of a token amongst other events.
 *
 * Tokens can "contain" other tokens, even if they're stored in a linked list,
 * by `enter`ing before and `exit`ing after them.
 *
 * @see {@linkcode Context}
 * @see {@linkcode EventType}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T=TokenType]
 *  The token type
 */
type Event<T extends TokenType = TokenType> = [
  event: EventType,
  token: Token<T>,
  context: Context
]

export type { Event as default }
