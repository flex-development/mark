/**
 * @file Type Tests - ObjectExpression
 * @module examples/jack/ast/nodes/tests/unit-d/ObjectExpression
 */

import type {
  Data,
  ObjectContent,
  ObjectMarker,
  Parent
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../object-expression.mts'

describe('unit-d:ast/nodes/ObjectExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectExpressionData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [ObjectMarker, ...ObjectContent[], ObjectMarker] | [ObjectMarker, ...ObjectContent[]]]', () => {
    // Arrange
    type Expect =
      | [ObjectMarker, ...ObjectContent[], ObjectMarker]
      | [ObjectMarker, ...ObjectContent[]]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: ObjectExpressionData | undefined]', () => {
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

  it('should match [type: "objectExpression"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'objectExpression'>()
  })

  describe('ObjectExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
