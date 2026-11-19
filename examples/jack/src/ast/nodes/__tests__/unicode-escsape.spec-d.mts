/**
 * @file Type Tests - UnicodeEscape
 * @module examples/jack/ast/nodes/tests/unit-d/UnicodeEscape
 */

import type {
  CharacterEscape,
  Data,
  Parent,
  UnicodeEscapeValue
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../unicode-escape.mts'

describe('unit-d:ast/nodes/UnicodeEscape', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnicodeEscapeData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [CharacterEscape, UnicodeEscapeValue] | [CharacterEscape]]', () => {
    // Arrange
    type Expect = [CharacterEscape, UnicodeEscapeValue] | [CharacterEscape]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: UnicodeEscapeData | undefined]', () => {
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

  it('should match [type: "unicodeEscape"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'unicodeEscape'>()
  })

  describe('UnicodeEscapeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
