/**
 * @file Type Tests - Write
 * @module fsm/parse/types/tests/unit-d/Write
 */

import type { Event, Writable } from '@flex-development/fsm/parse'
import type TestSubject from '../write.mts'

describe('unit-d:types/Write', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Writable]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Writable]>()
    })
  })

  describe('returns', () => {
    it('should return Event[]', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Event[]>()
    })
  })
})
