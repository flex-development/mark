/**
 * @file Type Tests - BeforeEnter
 * @module mark/parse/types/tests/unit-d/BeforeEnter
 */

import type {
  Context,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'
import type TestSubject from '../before-enter.mts'

describe('unit-d:types/BeforeEnter', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [TokenType, TokenFields]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[TokenType, TokenFields]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
