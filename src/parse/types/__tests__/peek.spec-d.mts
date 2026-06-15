/**
 * @file Type Tests - Peek
 * @module fsm/parse/types/tests/unit-d/Peek
 */

import type { Code } from '@flex-development/fsm/parse'
import type TestSubject from '../peek.mts'

describe('unit-d:types/Peek', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return Code', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Code>()
    })
  })
})
