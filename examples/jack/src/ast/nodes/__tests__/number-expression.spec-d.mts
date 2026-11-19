/**
 * @file Type Tests - NumberExpression
 * @module examples/jack/ast/nodes/tests/unit-d/NumberExpression
 */

import type {
  Data,
  Operand,
  Parent,
  SignOperator,
  UnsignedNumber
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../number-expression.mts'

describe('unit-d:ast/nodes/NumberExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NumberExpressionData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [[SignOperator, Operand] | [SignOperator] | [UnsignedNumber]]', () => {
    // Arrange
    type Expect = [SignOperator, Operand] | [SignOperator] | [UnsignedNumber]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: NumberExpressionData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [malformed?: boolean | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'malformed'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('malformed')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [type: "numberExpression"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'numberExpression'>()
  })

  describe('NumberExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
