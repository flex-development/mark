/**
 * @file Type Tests - Closer
 * @module fsm/compile/types/tests/unit-d/Closer
 */

import type { Handle } from '@flex-development/fsm/compile'
import type TestSubject from '../closer.mts'

describe('unit-d:types/Closer', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Handle<T> | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(Handle | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Handle<T>', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Handle>()
    })
  })
})
