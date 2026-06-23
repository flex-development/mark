/**
 * @file Type Tests - DefineSkip
 * @module mark/parse/types/tests/unit-d/DefineSkip
 */

import type { Place } from '@flex-development/mark/parse'
import type TestSubject from '../define-skip.mts'

describe('unit-d:types/DefineSkip', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Place]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Place]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
