/**
 * @file Type Tests - FieldSeparator
 * @module examples/jack/ast/nodes/tests/unit-d/FieldSeparator
 */

import type { Data, Node } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../field-separator.mts'

describe('unit-d:ast/nodes/FieldSeparator', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FieldSeparatorData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: FieldSeparatorData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "fieldSeparator"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'fieldSeparator'>()
  })

  describe('FieldSeparatorData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
