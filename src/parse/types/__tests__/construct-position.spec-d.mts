/**
 * @file Type Tests - ConstructPosition
 * @module mark/parse/types/tests/unit-d/ConstructPosition
 */

import type { ConstructPositionMap } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct-position.mts'

describe('unit-d:types/ConstructPosition', () => {
  it('should equal ConstructPositionMap[keyof ConstructPositionMap]', () => {
    // Arrange
    type Expect = ConstructPositionMap[keyof ConstructPositionMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
