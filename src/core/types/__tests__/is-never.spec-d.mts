/**
 * @file Type Tests - IsNever
 * @module mark/core/types/tests/unit-d/IsNever
 */

import type { Primitive } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../is-never.mts'

describe('unit-d:types/IsNever', () => {
  it('should equal false if [T] does not extend [never]', () => {
    expectTypeOf<TestSubject<Primitive>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<object>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [never]', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<true>()
  })
})
