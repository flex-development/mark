/**
 * @file Type Tests - Place
 * @module fsm/parse/interfaces/tests/unit-d/Place
 */

import type { Point, RangeInfo } from '@flex-development/fsm/parse'
import type TestSubject from '../place.mts'

describe('unit-d:interfaces/Place', () => {
  it('should extend Point', () => {
    expectTypeOf<TestSubject>().toExtend<Point>()
  })

  it('should extend Range', () => {
    expectTypeOf<TestSubject>().toExtend<RangeInfo>()
  })
})
