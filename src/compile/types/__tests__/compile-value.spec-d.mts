/**
 * @file Type Tests - CompileValue
 * @module fsm/compile/types/tests/unit-d/CompileValue
 */

import type { CompileValueMap } from '@flex-development/fsm/compile'
import type TestSubject from '../compile-value.mts'

describe('unit-d:types/CompileValue', () => {
  it('should equal CompileValueMap[keyof CompileValueMap]', () => {
    // Arrange
    type Expect = CompileValueMap[keyof CompileValueMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
