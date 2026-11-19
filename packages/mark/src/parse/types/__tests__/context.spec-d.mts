/**
 * @file Type Tests - Context
 * @module mark/parse/types/tests/unit-d/Context
 */

import type { IfNever } from '@flex-development/mark/core'
import type { ContextMap, TokenizeContext } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../context.mts'

describe('unit-d:parse/types/Context', () => {
  it('should equal IfNever<keyof ContextMap, TokenizeContext, ContextMap[keyof ContextMap]>', () => {
    // Arrange
    type Registered = ContextMap[keyof ContextMap]
    type Expect = IfNever<keyof ContextMap, TokenizeContext, Registered>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
