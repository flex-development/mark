/**
 * @file Type Tests - NullExpression
 * @module examples/jack/ast/nodes/tests/unit-d/NullExpression
 */

import type { Data, Literal } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../null-expression.mts'

describe('unit-d:ast/nodes/NullExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NullExpressionData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: NullExpressionData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "nullExpression"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'nullExpression'>()
  })

  it('should match [value: null]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<null>()
  })

  describe('NullExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
