/**
 * @file Type Tests - SerializedStringMarker
 * @module examples/jack/types/tests/unit-d/SerializedStringMarker
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialized-string-marker.mts'

describe('unit-d:ast/types/SerializedStringMarker', () => {
  it('should extract "\'"', () => {
    expectTypeOf<TestSubject>().extract<'\''>().not.toBeNever()
  })

  it('should extract """', () => {
    expectTypeOf<TestSubject>().extract<'"'>().not.toBeNever()
  })
})
