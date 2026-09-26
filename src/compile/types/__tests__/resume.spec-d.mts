/**
 * @file Type Tests - Resume
 * @module mark/compile/interfaces/tests/unit-d/Resume
 */

import type { CompileContext } from '@flex-development/mark/compile'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../resume.mts'

describe('unit-d:types/Resume', () => {
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
