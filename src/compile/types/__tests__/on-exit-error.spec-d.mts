/**
 * @file Type Tests - OnExitError
 * @module fsm/compile/types/tests/unit-d/OnExitError
 */

import type { CompileContext } from '@flex-development/fsm/compile'
import type { Token } from '@flex-development/fsm/parse'
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
