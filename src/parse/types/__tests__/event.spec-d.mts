/**
 * @file Type Tests - Event
 * @module fsm/parse/types/tests/unit-d/Event
 */

import type {
  EventType,
  Token,
  TokenizeContext
} from '@flex-development/fsm/parse'
import type TestSubject from '../event.mts'

describe('unit-d:types/Event', () => {
  type T = 'succ'
  type Subject = TestSubject<T>

  it('should match [0: EventType]', () => {
    expectTypeOf<Subject>().toHaveProperty('0').toEqualTypeOf<EventType>()
  })

  it('should match [1: Token<T>]', () => {
    expectTypeOf<Subject>().toHaveProperty('1').toEqualTypeOf<Token<T>>()
  })

  it('should match [2: TokenizeContext]', () => {
    expectTypeOf<Subject>().toHaveProperty('2').toEqualTypeOf<TokenizeContext>()
  })
})
