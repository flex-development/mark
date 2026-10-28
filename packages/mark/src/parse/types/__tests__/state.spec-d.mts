/**
 * @file Type Tests - State
 * @module mark/parse/types/tests/unit-d/State
 */

import type { Code } from '@flex-development/mark/parse'
import type { Optional } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../state.mts'

describe('unit-d:types/State', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Code]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Code]>()
    })
  })

  describe('returns', () => {
    it('should return State | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Optional<TestSubject>>()
    })
  })
})
