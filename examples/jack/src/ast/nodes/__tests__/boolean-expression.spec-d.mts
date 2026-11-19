/**
 * @file Type Tests - BooleanExpression
 * @module examples/jack/ast/nodes/tests/unit-d/BooleanExpression
 */

import type { Data, Literal } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../boolean-expression.mts'

describe('unit-d:ast/nodes/BooleanExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BooleanExpressionData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: BooleanExpressionData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "booleanExpression"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'booleanExpression'>()
  })

  it('should match [value: boolean]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<boolean>()
  })

  describe('BooleanExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
