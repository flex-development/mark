/**
 * @file Type Tests - Create
 * @module mark/parse/types/tests/unit-d/Create
 */

import type { Context, Point } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create.mts'

describe('unit-d:types/Create', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Point | null | undefined)?]', () => {
      // Arrange
      type Expect = [(Point | null | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return Context', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Context>()
    })
  })
})
