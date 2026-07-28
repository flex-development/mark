/**
 * @file Type Tests - BeforeConsume
 * @module mark/parse/types/tests/unit-d/BeforeConsume
 */

import type { Code, Context, Place } from '@flex-development/mark/parse'
import type TestSubject from '../before-consume.mts'

describe('unit-d:types/BeforeConsume', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Code, Place]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Code, Place]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
