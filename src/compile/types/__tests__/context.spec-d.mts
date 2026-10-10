/**
 * @file Type Tests - Context
 * @module mark/compile/types/tests/unit-d/Context
 */

import type { ContextMap } from '@flex-development/mark/compile'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../context.mts'

describe('unit-d:types/Context', () => {
  it('should equal ContextMap[keyof ContextMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<ContextMap[keyof ContextMap]>()
  })
})
