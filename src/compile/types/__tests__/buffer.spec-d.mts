/**
 * @file Type Tests - Buffer
 * @module mark/compile/types/tests/unit-d/Buffer
 */

import type { CompileContext } from '@flex-development/mark/compile'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../buffer.mts'

describe('unit-d:types/Buffer', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
