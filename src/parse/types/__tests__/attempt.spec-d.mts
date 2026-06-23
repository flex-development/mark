/**
 * @file Type Tests - Attempt
 * @module mark/parse/types/tests/unit-d/Attempt
 */

import type { Constructs, State } from '@flex-development/mark/parse'
import type TestSubject from '../attempt.mts'

describe('unit-d:types/Attempt', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Constructs, State, (State | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Constructs, State, (State | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return State', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<State>()
    })
  })
})
