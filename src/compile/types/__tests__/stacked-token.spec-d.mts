/**
 * @file Type Tests - StackedToken
 * @module fsm/compile/types/tests/unit-d/StackedToken
 */

import type { OnEnterError } from '@flex-development/fsm/compile'
import type { Token } from '@flex-development/fsm/parse'
import type TestSubject from '../stacked-token.mts'

describe('unit-d:types/StackedToken', () => {
  it('should equal [Token, OnEnterError | null | undefined]', () => {
    // Arrange
    type Expect = [Token, OnEnterError | null | undefined]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
