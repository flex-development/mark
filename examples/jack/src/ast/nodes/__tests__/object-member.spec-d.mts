/**
 * @file Type Tests - ObjectMember
 * @module examples/jack/ast/nodes/tests/unit-d/ObjectMember
 */

import type {
  Data,
  FieldSeparator,
  Identifier,
  ObjectMemberContent,
  Parent,
  StringExpression
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../object-member.mts'

describe('unit-d:ast/nodes/ObjectMember', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectMemberData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [Identifier | StringExpression, ...(FieldSeparator | ObjectMemberContent)[]]]', () => {
    // Arrange
    type Expect = [Identifier | StringExpression,
      ...(FieldSeparator | ObjectMemberContent)[]]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: ObjectMemberData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [key: string]', () => {
    expectTypeOf<Required>().extract<'key'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('key').toEqualTypeOf<string>()
  })

  it('should match [malformed?: boolean | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'malformed'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('malformed')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [type: "objectMember"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'objectMember'>()
  })

  describe('ObjectMemberData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
