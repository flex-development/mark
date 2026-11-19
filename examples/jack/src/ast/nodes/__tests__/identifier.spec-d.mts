/**
 * @file Type Tests - Identifier
 * @module examples/jack/ast/nodes/tests/unit-d/Identifier
 */

import type { Data, Node } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../identifier.mts'

describe('unit-d:ast/nodes/Identifier', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IdentifierData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: IdentifierData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<Required>().extract<'name'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('name').toEqualTypeOf<string>()
  })

  it('should match [type: "identifier"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'identifier'>()
  })

  describe('IdentifierData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
