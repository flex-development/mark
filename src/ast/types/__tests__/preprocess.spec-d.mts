/**
 * @file Type Tests - Preprocess
 * @module mark/ast/types/tests/unit-d/Preprocess
 */

import type { CompileContext, Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../preprocess.mts'

describe('unit-d:types/Preprocess', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Event[], Tree]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Event[], Tree]>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<null | undefined>()
    })
  })
})
