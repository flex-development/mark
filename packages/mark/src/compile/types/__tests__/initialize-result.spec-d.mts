/**
 * @file Type Tests - InitializeResult
 * @module mark/compile/types/tests/unit-d/InitializeResult
 */

import type { CompileResult, Context } from '@flex-development/mark/compile'
import type { Event } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../initialize-result.mts'

describe('unit-d:types/InitializeResult', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Event[]]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Event[]]>()
    })
  })

  describe('returns', () => {
    it('should return CompileResult', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<CompileResult>()
    })
  })
})
