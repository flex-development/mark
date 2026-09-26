/**
 * @file Type Tests - StackedToken
 * @module mark/compile/types/tests/unit-d/StackedToken
 */

import type { OnEnterError } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../stacked-token.mts'

describe('unit-d:types/StackedToken', () => {
  it('should equal [Token, OnEnterError | null | undefined]', () => {
    // Arrange
    type Expect = [Token, OnEnterError | null | undefined]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
