/**
 * @file Type Tests - Transform
 * @module fsm/compile/types/tests/unit-d/Transform
 */

import type { CompileResult } from '@flex-development/fsm/compile'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../transform.mts'

describe('unit-d:types/Transform', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [CompileResult]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[CompileResult]>()
    })
  })

  describe('returns', () => {
    it('should return CompileResult | null | undefined', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Nilable<CompileResult>>()
    })
  })
})
