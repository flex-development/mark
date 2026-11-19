/**
 * @file Type Tests - UnsignedNumber
 * @module examples/jack/ast/nodes/tests/unit-d/UnsignedNumber
 */

import type { Data, Literal } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../unsigned-number.mts'

describe('unit-d:ast/nodes/UnsignedNumber', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnsignedNumberData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: UnsignedNumberData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "unsignedNumber"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'unsignedNumber'>()
  })

  it('should match [value: number | string]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<number | string>()
  })

  describe('UnsignedNumberData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
