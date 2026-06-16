/**
 * @file Type Tests - CreateToken
 * @module fsm/parse/types/tests/unit-d/CreateToken
 */

import type {
  Token,
  TokenInfo,
  TokenType
} from '@flex-development/fsm/parse'
import type TestSubject from '../create-token.mts'

describe('unit-d:types/CreateToken', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [TokenType, (TokenInfo | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[TokenType, (TokenInfo | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Token', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Token>()
    })
  })
})
