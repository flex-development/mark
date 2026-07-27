/**
 * @file Type Tests - Skip
 * @module mark/parse/types/tests/unit-d/Skip
 */

import type { Place, SkipInfo } from '@flex-development/mark/parse'
import type TestSubject from '../skip.mts'

describe('unit-d:types/Skip', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Place, SkipInfo]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Place, SkipInfo]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
