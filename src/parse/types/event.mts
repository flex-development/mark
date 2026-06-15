/**
 * @file Type Aliases - Event
 * @module fsm/parse/types/Event
 */

import type {
  EventType,
  Token,
  TokenizeContext,
  TokenType
} from '@flex-development/fsm/parse'

/**
 * The start or end of a token amongst other events.
 *
 * Tokens can "contain" other tokens, even if they're stored in a linked list,
 * by `enter`ing before and `exit`ing after them.
 *
 * @see {@linkcode EventType}
 * @see {@linkcode TokenType}
 * @see {@linkcode TokenizeContext}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T=TokenType]
 *  The token type
 */
type Event<T extends TokenType = TokenType> = [
  event: EventType,
  token: Token<T>,
  context: TokenizeContext
]

export type { Event as default }
