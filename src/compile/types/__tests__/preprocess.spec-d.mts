/**
 * @file Type Tests - Preprocess
 * @module mark/compile/types/tests/unit-d/Preprocess
 */

import type {
  CompileContext,
  CompileResult
} from '@flex-development/mark/compile'
import type { Event } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../preprocess.mts'

describe('unit-d:types/Preprocess', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Event[], CompileResult]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Event[], CompileResult]>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<null | undefined>()
    })
  })
})
