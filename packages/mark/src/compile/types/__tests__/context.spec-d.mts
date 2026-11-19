/**
 * @file Type Tests - Context
 * @module mark/compile/types/tests/unit-d/Context
 */

import type { CompileContext, ContextMap } from '@flex-development/mark/compile'
import type { IfNever } from '@flex-development/mark/core'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../context.mts'

describe('unit-d:compile/types/Context', () => {
  it('should equal IfNever<keyof ContextMap, CompileContext, ContextMap[keyof ContextMap]>', () => {
    // Arrange
    type Registered = ContextMap[keyof ContextMap]
    type Expect = IfNever<keyof ContextMap, CompileContext, Registered>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
