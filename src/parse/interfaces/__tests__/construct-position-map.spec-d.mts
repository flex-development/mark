/**
 * @file Type Tests - ConstructPositionMap
 * @module mark/parse/interfaces/tests/unit-d/ConstructPositionMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct-position-map.mts'

describe('unit-d:interfaces/ConstructPositionMap', () => {
  it('should match [after: "after"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('after').toEqualTypeOf<'after'>()
  })

  it('should match [before: "before"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('before')
      .toEqualTypeOf<'before'>()
  })
})
