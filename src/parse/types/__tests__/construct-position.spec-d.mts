/**
 * @file Type Tests - ConstructPosition
 * @module fsm/parse/types/tests/unit-d/ConstructPosition
 */

import type { ConstructPositionMap } from '@flex-development/fsm/parse'
import type TestSubject from '../construct-position.mts'

describe('unit-d:types/ConstructPosition', () => {
  it('should equal ConstructPositionMap[keyof ConstructPositionMap]', () => {
    // Arrange
    type Expect = ConstructPositionMap[keyof ConstructPositionMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
