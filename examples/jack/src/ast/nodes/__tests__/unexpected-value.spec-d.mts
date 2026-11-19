/**
 * @file Type Tests - UnexpectedValue
 * @module examples/jack/ast/nodes/tests/unit-d/UnexpectedValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../unexpected-value.mts'

describe('unit-d:ast/nodes/UnexpectedValue', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnexpectedValueData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: UnexpectedValueData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "unexpectedValue"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'unexpectedValue'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<string>()
  })

  describe('UnexpectedValueData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
