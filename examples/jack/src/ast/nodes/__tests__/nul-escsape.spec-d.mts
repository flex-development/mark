/**
 * @file Type Tests - NulEscape
 * @module examples/jack/ast/nodes/tests/unit-d/NulEscape
 */

import type {
  Data,
  EscapeMarker,
  NulEscapeValue,
  Parent
} from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../nul-escape.mts'

describe('unit-d:ast/nodes/NulEscape', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NulEscapeData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [EscapeMarker, NulEscapeValue]]', () => {
    // Arrange
    type Expect = [EscapeMarker, NulEscapeValue]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: NulEscapeData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "nulEscape"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'nulEscape'>()
  })

  describe('NulEscapeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
