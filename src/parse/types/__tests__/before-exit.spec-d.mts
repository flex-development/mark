/**
 * @file Type Tests - BeforeExit
 * @module mark/parse/types/tests/unit-d/BeforeExit
 */

import type { Context, Token } from '@flex-development/mark/parse'
import type TestSubject from '../before-exit.mts'

describe('unit-d:types/BeforeExit', () => {
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
