/**
 * @file Type Tests - Event
 * @module mark/parse/types/tests/unit-d/Event
 */

import type {
  Context,
  EventType,
  Token,
  TokenTypeMap
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../event.mts'

describe('unit-d:types/Event', () => {
  type T = TokenTypeMap['succ']
  type Subject = TestSubject<T>

  it('should match [0: EventType]', () => {
    expectTypeOf<Subject>().toHaveProperty('0').toEqualTypeOf<EventType>()
  })

  it('should match [1: Token<T>]', () => {
    expectTypeOf<Subject>().toHaveProperty('1').toEqualTypeOf<Token<T>>()
  })

  it('should match [2: Context]', () => {
    expectTypeOf<Subject>().toHaveProperty('2').toEqualTypeOf<Context>()
  })
})
