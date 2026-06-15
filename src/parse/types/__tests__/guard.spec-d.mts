/**
 * @file Type Tests - Guard
 * @module fsm/parse/types/tests/unit-d/Guard
 */

import type { Code, TokenizeContext } from '@flex-development/fsm/parse'
import type TestSubject from '../guard.mts'

describe('unit-d:types/Guard', () => {
  it('should match [this: TokenizeContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<TokenizeContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Code]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Code]>()
    })
  })

  describe('returns', () => {
    it('should return boolean', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<boolean>()
    })
  })
})
