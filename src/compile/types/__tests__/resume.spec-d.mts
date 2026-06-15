/**
 * @file Type Tests - Resume
 * @module fsm/compile/interfaces/tests/unit-d/Resume
 */

import type { CompileContext } from '@flex-development/fsm/compile'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../resume.mts'

describe('unit-d:interfaces/Resume', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return string | null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Nilable<string>>()
    })
  })
})
