/**
 * @file Type Tests - CompileValue
 * @module mark/compile/types/tests/unit-d/CompileValue
 */

import type { CompileValueMap } from '@flex-development/mark/compile'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-value.mts'

describe('unit-d:types/CompileValue', () => {
  it('should equal CompileValueMap[keyof CompileValueMap]', () => {
    // Arrange
    type Expect = CompileValueMap[keyof CompileValueMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
