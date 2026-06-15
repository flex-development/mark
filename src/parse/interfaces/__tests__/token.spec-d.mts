/**
 * @file Type Tests - Token
 * @module fsm/parse/interfaces/tests/unit-d/Token
 */

import type { TokenInfo, TokenType } from '@flex-development/fsm/parse'
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
