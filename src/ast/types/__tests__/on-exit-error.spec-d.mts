/**
 * @file Type Tests - OnExitError
 * @module mark/ast/types/tests/unit-d/OnExitError
 */

import type { CompileContext } from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../on-exit-error.mts'

describe('unit-d:types/OnExitError', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<L>, Token<R>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
