/**
 * @file Type Tests - OnEnterError
 * @module mark/compile/types/tests/unit-d/OnEnterError
 */

import type { CompileContext } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../on-enter-error.mts'

describe('unit-d:types/OnEnterError', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<L> | undefined, Token<R>]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Token | undefined, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
