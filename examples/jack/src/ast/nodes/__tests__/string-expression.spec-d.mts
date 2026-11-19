/**
 * @file Type Tests - StringExpression
 * @module examples/jack/ast/nodes/tests/unit-d/StringExpression
 */

import type {
  Data,
  Parent,
  StringContent,
  StringMarker
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../string-expression.mts'

describe('unit-d:ast/nodes/StringExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.StringExpressionData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [StringMarker, ...StringContent[], StringMarker] | [StringMarker, ...StringContent[]]]', () => {
    // Arrange
    type Expect =
      | [StringMarker, ...StringContent[], StringMarker]
      | [StringMarker, ...StringContent[]]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: StringExpressionData | undefined]', () => {
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

  it('should match [type: "stringExpression"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'stringExpression'>()
  })

  describe('StringExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
