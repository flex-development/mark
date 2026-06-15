/**
 * @file Type Tests - EventType
 * @module fsm/parse/types/tests/unit-d/EventType
 */

import type TestSubject from '../event-type.mts'

describe('unit-d:types/EventType', () => {
  it('should extract "enter"', () => {
    expectTypeOf<TestSubject>().extract<'enter'>().not.toBeNever()
  })

  it('should extract "exit"', () => {
    expectTypeOf<TestSubject>().extract<'exit'>().not.toBeNever()
  })
})
