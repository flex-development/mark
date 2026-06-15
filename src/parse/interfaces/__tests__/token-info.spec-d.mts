/**
 * @file Type Tests - TokenInfo
 * @module fsm/parse/interfaces/tests/unit-d/TokenInfo
 */

import type { Position, TokenFields } from '@flex-development/fsm/parse'
import type TestSubject from '../token-info.mts'

describe('unit-d:interfaces/TokenInfo', () => {
  it('should extend Position', () => {
    expectTypeOf<TestSubject>().toExtend<Position>()
  })

  it('should extend TokenFields', () => {
    expectTypeOf<TestSubject>().toExtend<TokenFields>()
  })
})
