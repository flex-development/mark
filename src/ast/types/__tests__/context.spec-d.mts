/**
 * @file Type Tests - Context
 * @module mark/ast/types/tests/unit-d/Context
 */

import type { ContextMap } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../context.mts'

describe('unit-d:types/Context', () => {
  it('should equal ContextMap[keyof ContextMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<ContextMap[keyof ContextMap]>()
  })
})
