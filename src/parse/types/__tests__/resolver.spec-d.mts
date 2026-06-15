/**
 * @file Type Tests - Resolver
 * @module fsm/parse/types/tests/unit-d/Resolver
 */

import type { Event, TokenizeContext } from '@flex-development/fsm/parse'
import type TestSubject from '../resolver.mts'

describe('unit-d:types/Resolver', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Event[], TokenizeContext]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Event[], TokenizeContext]>()
    })
  })

  describe('returns', () => {
    it('should return Event[]', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Event[]>()
    })
  })
})
