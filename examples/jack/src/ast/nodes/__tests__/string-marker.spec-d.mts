/**
 * @file Type Tests - StringMarker
 * @module examples/jack/ast/nodes/tests/unit-d/StringMarker
 */

import type {
  Data,
  Literal,
  SerializedStringMarker
} from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../string-marker.mts'

describe('unit-d:ast/nodes/StringMarker', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.StringMarkerData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: StringMarkerData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "stringMarker"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'stringMarker'>()
  })

  it('should match [value: SerializedStringMarker]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<SerializedStringMarker>()
  })

  describe('StringMarkerData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
