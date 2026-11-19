/**
 * @file Type Tests - HexEscape
 * @module examples/jack/ast/nodes/tests/unit-d/HexEscape
 */

import type {
  CharacterEscape,
  Data,
  HexEscapeValue,
  Parent
} from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../hex-escape.mts'

describe('unit-d:ast/nodes/HexEscape', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.HexEscapeData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [CharacterEscape, HexEscapeValue] | [CharacterEscape]]', () => {
    // Arrange
    type Expect = [CharacterEscape, HexEscapeValue] | [CharacterEscape]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: HexEscapeData | undefined]', () => {
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

  it('should match [type: "hexEscape"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'hexEscape'>()
  })

  describe('HexEscapeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
