/**
 * @file Type Tests - BeforeStore
 * @module mark/parse/types/tests/unit-d/BeforeStore
 */

import type { Context } from '@flex-development/mark/parse'
import type TestSubject from '../before-store.mts'

describe('unit-d:types/BeforeStore', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
