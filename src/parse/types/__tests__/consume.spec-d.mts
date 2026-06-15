/**
 * @file Type Tests - Consume
 * @module fsm/parse/types/tests/unit-d/Consume
 */

import type { Code } from '@flex-development/fsm/parse'
import type TestSubject from '../consume.mts'

describe('unit-d:types/Consume', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Code]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Code]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toBeUndefined()
    })
  })
})
