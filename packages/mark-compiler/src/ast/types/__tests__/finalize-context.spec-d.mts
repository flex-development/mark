/**
 * @file Type Tests - FinalizeContext
 * @module mark-compiler/ast/types/tests/unit-d/FinalizeContext
 */

import type { Options } from '@flex-development/mark-compiler/ast'
import type { Context } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../finalize-context.mts'

describe('unit-d:ast/types/FinalizeContext', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Context, Options]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Context, Options]>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined | void', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<null | undefined | void>()
    })
  })
})
