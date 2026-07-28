/**
 * @file Type Tests - AfterRestore
 * @module mark/parse/types/tests/unit-d/AfterRestore
 */

import type { Context } from '@flex-development/mark/parse'
import type TestSubject from '../after-restore.mts'

describe('unit-d:types/AfterRestore', () => {
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
