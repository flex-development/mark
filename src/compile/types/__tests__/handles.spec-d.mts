/**
 * @file Type Tests - Handles
 * @module fsm/compile/types/tests/unit-d/Handles
 */

import type { Handle } from '@flex-development/fsm/compile'
import type { TokenType } from '@flex-development/fsm/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../handles.mts'

describe('unit-d:types/Handles', () => {
  it('should equal Partial<Record<TokenType, Handle<any> | null | undefined>>', () => {
    // Arrange
    type Expect = Partial<Record<TokenType, Nilable<Handle<any>>>>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
