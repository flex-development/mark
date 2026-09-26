/**
 * @file Type Tests - Exit
 * @module mark/parse/types/tests/unit-d/Exit
 */

import type { Token, TokenType } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
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
