/**
 * @file Type Tests - Handles
 * @module mark/compile/types/tests/unit-d/Handles
 */

import type { Handle } from '@flex-development/mark/compile'
import type { TokenType } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../handles.mts'

describe('unit-d:types/Handles', () => {
  it('should equal Partial<Record<TokenType, Handle<any> | null | undefined>>', () => {
    // Arrange
    type Expect = Partial<Record<TokenType, Nilable<Handle<any>>>>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
