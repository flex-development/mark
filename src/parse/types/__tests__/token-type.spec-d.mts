/**
 * @file Type Tests - TokenType
 * @module fsm/parse/interfaces/tests/unit-d/TokenType
 */

import type { TokenTypeMap } from '@flex-development/fsm/parse'
import type TestSubject from '../token-type.mts'

describe('unit-d:interfaces/TokenType', () => {
  it('should equal TokenTypeMap[keyof TokenTypeMap]', () => {
    // Arrange
    type Expect = TokenTypeMap[keyof TokenTypeMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
