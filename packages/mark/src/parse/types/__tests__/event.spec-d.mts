/**
 * @file Type Tests - Event
 * @module mark/parse/types/tests/unit-d/Event
 */

import type {
  Context,
  EventType,
  Token
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../event.mts'

describe('unit-d:types/Event', () => {
  it('should match [0: EventType]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('0').toEqualTypeOf<EventType>()
  })

  it('should match [1: Token<T>]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('1').toEqualTypeOf<Token>()
  })

  it('should match [2: Context]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('2').toEqualTypeOf<Context>()
  })

  it('should match [length: 3]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('length').toEqualTypeOf<3>()
  })
})
