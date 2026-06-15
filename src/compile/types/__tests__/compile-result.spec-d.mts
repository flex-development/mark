/**
 * @file Type Tests - CompileResult
 * @module fsm/compile/types/tests/unit-d/CompileResult
 */

import type { CompileResultMap } from '@flex-development/fsm/compile'
import type TestSubject from '../compile-result.mts'

describe('unit-d:types/CompileResult', () => {
  it('should equal CompileResultMap[keyof CompileResultMap]', () => {
    // Arrange
    type Expect = CompileResultMap[keyof CompileResultMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
