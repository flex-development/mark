/**
 * @file Type Tests - SerializedSignOperator
 * @module examples/jack/types/tests/unit-d/SerializedSignOperator
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialized-sign-operator.mts'

describe('unit-d:ast/types/SerializedSignOperator', () => {
  it('should extract "+"', () => {
    expectTypeOf<TestSubject>().extract<'+'>().not.toBeNever()
  })

  it('should extract "-"', () => {
    expectTypeOf<TestSubject>().extract<'-'>().not.toBeNever()
  })
})
