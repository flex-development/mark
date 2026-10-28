/**
 * @file Type Tests - Opener
 * @module mark/ast/types/tests/unit-d/Opener
 */

import type { CreateNode, Handle } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../opener.mts'

describe('unit-d:types/Opener', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [CreateNode<N, T>, (Handle<T> | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CreateNode, (Handle | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Handle<T>', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Handle>()
    })
  })
})
