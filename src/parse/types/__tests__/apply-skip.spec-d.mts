/**
 * @file Type Tests - ApplySkip
 * @module mark/parse/types/tests/unit-d/ApplySkip
 */

import type { Code } from '@flex-development/mark/parse'
import type TestSubject from '../apply-skip.mts'

describe('unit-d:types/ApplySkip', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Code | false | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(Code | false | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
