/**
 * @file Type Tests - Range
 * @module fsm/parse/interfaces/tests/unit-d/Range
 */

import type { RangeInfo } from '@flex-development/fsm/parse'
import type TestSubject from '../range.mts'

describe('unit-d:interfaces/Range', () => {
  it('should match [end: RangeInfo]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('end').toEqualTypeOf<RangeInfo>()
  })

  it('should match [start: RangeInfo]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('start')
      .toEqualTypeOf<RangeInfo>()
  })
})
