/**
 * @file Type Tests - Opener
 * @module fsm/compile/types/tests/unit-d/Opener
 */

import type { CreateValue, Handle } from '@flex-development/fsm/compile'
import type TestSubject from '../opener.mts'

describe('unit-d:types/Opener', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [CreateValue<V, T>, (Handle<T> | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CreateValue, (Handle | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Handle<T>', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Handle>()
    })
  })
})
