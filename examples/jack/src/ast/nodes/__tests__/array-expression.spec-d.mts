/**
 * @file Type Tests - ArrayExpression
 * @module examples/jack/ast/nodes/tests/unit-d/ArrayExpression
 */

import type {
  ArrayContent,
  ArrayMarker,
  Data,
  Parent
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../array-expression.mts'

describe('unit-d:ast/nodes/ArrayExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArrayExpressionData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [ArrayMarker, ...ArrayContent[], ArrayMarker] | [ArrayMarker, ...ArrayContent[]]]', () => {
    // Arrange
    type Expect =
      | [ArrayMarker, ...ArrayContent[], ArrayMarker]
      | [ArrayMarker, ...ArrayContent[]]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: ArrayExpressionData | undefined]', () => {
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

  it('should match [sparse?: boolean | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'sparse'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('sparse')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [type: "arrayExpression"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'arrayExpression'>()
  })

  describe('ArrayExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
