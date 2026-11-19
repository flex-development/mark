/**
 * @file Type Tests - CharacterEscape
 * @module examples/jack/ast/nodes/tests/unit-d/CharacterEscape
 */

import type {
  CharacterEscapeValue,
  Data,
  EscapeMarker,
  Parent
} from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../character-escape.mts'

describe('unit-d:ast/nodes/CharacterEscape', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CharacterEscapeData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [EscapeMarker, CharacterEscapeValue]]', () => {
    // Arrange
    type Expect = [EscapeMarker, CharacterEscapeValue]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: CharacterEscapeData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "characterEscape"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'characterEscape'>()
  })

  describe('CharacterEscapeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
