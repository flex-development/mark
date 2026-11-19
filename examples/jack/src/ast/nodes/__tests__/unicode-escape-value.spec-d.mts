/**
 * @file Type Tests - UnicodeEscapeValue
 * @module examples/jack/ast/nodes/tests/unit-d/UnicodeEscapeValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../unicode-escape-value.mts'

describe('unit-d:ast/nodes/UnicodeEscapeValue', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnicodeEscapeValueData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: UnicodeEscapeValueData | undefined]', () => {
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

  it('should match [type: "unicodeEscapeValue"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'unicodeEscapeValue'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<string>()
  })

  describe('UnicodeEscapeValueData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
