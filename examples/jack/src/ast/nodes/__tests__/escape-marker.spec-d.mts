/**
 * @file Type Tests - EscapeMarker
 * @module examples/jack/ast/nodes/tests/unit-d/EscapeMarker
 */

import type { Data, Node } from '@flex-development/jack/ast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../escape-marker.mts'

describe('unit-d:ast/nodes/EscapeMarker', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EscapeMarkerData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: EscapeMarkerData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "escapeMarker"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'escapeMarker'>()
  })

  describe('EscapeMarkerData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
