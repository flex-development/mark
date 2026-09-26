/**
 * @file Type Tests - Exit
 * @module mark/compile/types/tests/unit-d/Exit
 */

import type {
  CompileContext,
  OnExitError
} from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../exit.mts'

describe('unit-d:types/Exit', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token, (OnExitError | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Token, (OnExitError | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
