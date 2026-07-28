/**
 * @file Type Tests - AfterEnter
 * @module mark/parse/types/tests/unit-d/AfterEnter
 */

import type { Context, Token } from '@flex-development/mark/parse'
import type TestSubject from '../after-enter.mts'

describe('unit-d:types/AfterEnter', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Token]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
