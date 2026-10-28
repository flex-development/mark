/**
 * @file Type Tests - Enter
 * @module mark/compile/types/tests/unit-d/Enter
 */

import type {
  CompileValue,
  Context,
  OnEnterError
} from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../enter.mts'

describe('unit-d:types/Enter', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [CompileValue, Token, (OnEnterError | null | undefined)?]', () => {
      // Arrange
      type Expect = [CompileValue, Token, (OnEnterError | null | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
