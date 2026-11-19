/**
 * @file Type Tests - SignOperator
 * @module examples/jack/ast/nodes/tests/unit-d/SignOperator
 */

import type {
  Data,
  Literal,
  SerializedSignOperator
} from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../sign-operator.mts'

describe('unit-d:ast/nodes/SignOperator', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SignOperatorData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: SignOperatorData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "signOperator"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'signOperator'>()
  })

  it('should match [value: SerializedSignOperator]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<SerializedSignOperator>()
  })

  describe('SignOperatorData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
