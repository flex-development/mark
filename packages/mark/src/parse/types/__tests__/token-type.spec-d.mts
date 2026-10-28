/**
 * @file Type Tests - TokenType
 * @module mark/parse/types/tests/unit-d/TokenType
 */

import type { TokenTypeMap } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../token-type.mts'

describe('unit-d:types/TokenType', () => {
  it('should equal TokenTypeMap[keyof TokenTypeMap]', () => {
    // Arrange
    type Expect = TokenTypeMap[keyof TokenTypeMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
