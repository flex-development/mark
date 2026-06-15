/**
 * @file Type Tests - Position
 * @module fsm/parse/interfaces/tests/unit-d/Position
 */

import type { Place } from '@flex-development/fsm/parse'
import type TestSubject from '../position.mts'

describe('unit-d:interfaces/Position', () => {
  it('should match [end: Place]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('end').toEqualTypeOf<Place>()
  })

  it('should match [start: Place]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('start').toEqualTypeOf<Place>()
  })
})
