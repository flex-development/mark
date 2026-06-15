/**
 * @file Type Tests - CompileResultMap
 * @module fsm/compile/interfaces/tests/unit-d/CompileResultMap
 */

import type TestSubject from '../compile-result-map.mts'

describe('unit-d:interfaces/CompileResultMap', () => {
  it('should register event compilation results', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
