/**
 * @file Type Tests - Enterer
 * @module mark-compiler/compile/types/tests/unit-d/Enterer
 */

import type {
  CompileValue,
  Context,
  Enter
} from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../enterer.mts'

describe('unit-d:compile/types/Enterer', () => {
  it('should extend Enter but not equal Enter', () => {
    expectTypeOf<TestSubject>().toExtend<Enter>()
    expectTypeOf<TestSubject>().not.toEqualTypeOf<Enter>()
  })

  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [CompileValue, Token]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CompileValue, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
