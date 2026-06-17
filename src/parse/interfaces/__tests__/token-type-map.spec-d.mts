/**
 * @file Type Tests - TokenTypeMap
 * @module fsm/parse/interfaces/tests/unit-d/TokenTypeMap
 */

import type TestSubject from '../token-type-map.mts'

describe('unit-d:interfaces/TokenTypeMap', () => {
  it('should match [null: never]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('null').toEqualTypeOf<never>()
  })

  it('should register token types', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
