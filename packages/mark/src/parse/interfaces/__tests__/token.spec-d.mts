/**
 * @file Type Tests - Token
 * @module mark/parse/interfaces/tests/unit-d/Token
 */

import type { TokenInfo, TokenType } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../token.mts'

describe('unit-d:interfaces/Token', () => {
  it('should extend TokenInfo', () => {
    expectTypeOf<TestSubject>().toExtend<TokenInfo>()
  })

  it('should match [type: T]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<TokenType>()
  })
})
