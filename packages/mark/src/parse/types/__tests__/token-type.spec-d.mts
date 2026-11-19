/**
 * @file Type Tests - TokenType
 * @module mark/parse/types/tests/unit-d/TokenType
 */

import type { IfNever } from '@flex-development/mark/core'
import type { TokenTypeMap } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../token-type.mts'

describe('unit-d:parse/types/TokenType', () => {
  it('should equal IfNever<keyof TokenTypeMap, string, TokenTypeMap[keyof TokenTypeMap]>', () => {
    // Arrange
    type Registered = TokenTypeMap[keyof TokenTypeMap]
    type Expect = IfNever<keyof TokenTypeMap, string, Registered>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
