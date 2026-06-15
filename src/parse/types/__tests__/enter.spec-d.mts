/**
 * @file Type Tests - Enter
 * @module fsm/parse/types/tests/unit-d/Enter
 */

import type {
  Token,
  TokenFields,
  TokenType
} from '@flex-development/fsm/parse'
import type TestSubject from '../enter.mts'

describe('unit-d:types/Enter', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [TokenType, (TokenFields | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[TokenType, (TokenFields | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Token', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Token>()
    })
  })
})
