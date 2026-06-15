/**
 * @file Type Tests - CompileValueMap
 * @module fsm/compile/interfaces/tests/unit-d/CompileValueMap
 */

import type TestSubject from '../compile-value-map.mts'

describe('unit-d:interfaces/CompileValueMap', () => {
  it('should register event compilation values', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
