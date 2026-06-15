/**
 * @file Type Tests - ContentTypeMap
 * @module fsm/parse/interfaces/tests/unit-d/TokenTypeMap
 */

import type TestSubject from '../content-type-map.mts'

describe('unit-d:interfaces/ContentTypeMap', () => {
  it('should register content types', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
