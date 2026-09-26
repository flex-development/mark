/**
 * @file Type Tests - IfNever
 * @module mark/core/types/tests/unit-d/IfNever
 */

import type { Primitive } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../if-never.mts'

describe('unit-d:types/IfNever', () => {
  type F = false
  type T = true

  it('should equal F is U is not never', () => {
    expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<object, T, F>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<unknown, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T is U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<T>()
  })
})
