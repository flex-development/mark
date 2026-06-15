/**
 * @file Type Tests - Preprocess
 * @module fsm/compile/types/tests/unit-d/Preprocess
 */

import type {
  CompileContext,
  CompileResult
} from '@flex-development/fsm/compile'
import type { Event } from '@flex-development/fsm/parse'
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
