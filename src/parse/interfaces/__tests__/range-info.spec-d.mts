/**
 * @file Type Tests - RangeInfo
 * @module fsm/parse/interfaces/tests/unit-d/RangeInfo
 */

import type TestSubject from '../range-info.mts'

describe('unit-d:interfaces/RangeInfo', () => {
  it('should match [_bufferIndex: number]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('_bufferIndex')
      .toEqualTypeOf<number>()
  })

  it('should match [_index: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('_index').toEqualTypeOf<number>()
  })
})
