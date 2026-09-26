/**
 * @file Type Tests - TokenInfo
 * @module mark/parse/interfaces/tests/unit-d/TokenInfo
 */

import type { Position, TokenFields } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../token-info.mts'

describe('unit-d:interfaces/TokenInfo', () => {
  it('should extend Position', () => {
    expectTypeOf<TestSubject>().toExtend<Position>()
  })

  it('should extend TokenFields', () => {
    expectTypeOf<TestSubject>().toExtend<TokenFields>()
  })
})
