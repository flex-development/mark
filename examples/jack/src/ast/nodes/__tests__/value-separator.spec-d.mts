/**
 * @file Type Tests - ValueSeparator
 * @module examples/jack/ast/nodes/tests/unit-d/ValueSeparator
 */

import type { Data, Node } from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../value-separator.mts'

describe('unit-d:ast/nodes/ValueSeparator', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ValueSeparatorData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: ValueSeparatorData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [trailing?: boolean | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'trailing'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('trailing')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [type: "valueSeparator"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'valueSeparator'>()
  })

  describe('ValueSeparatorData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
