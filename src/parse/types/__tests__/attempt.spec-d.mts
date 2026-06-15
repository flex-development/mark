/**
 * @file Type Tests - Attempt
 * @module fsm/parse/types/tests/unit-d/Attempt
 */

import type { Constructs, State } from '@flex-development/fsm/parse'
import type TestSubject from '../attempt.mts'

describe('unit-d:types/Attempt', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Constructs, State?, State?]', () => {
      // Arrange
      type Expect = [Constructs, (State | undefined)?, (State | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return State', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<State>()
    })
  })
})
