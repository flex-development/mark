/**
 * @file Type Tests - Exit
 * @module fsm/parse/types/tests/unit-d/Exit
 */

import type { Token, TokenType } from '@flex-development/fsm/parse'
import type TestSubject from '../exit.mts'

describe('unit-d:types/Exit', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [TokenType]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[TokenType]>()
    })
  })

  describe('returns', () => {
    it('should return Token', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Token>()
    })
  })
})
