/**
 * @file Type Tests - CompileData
 * @module fsm/compile/interfaces/tests/unit-d/CompileData
 */

import type TestSubject from '../compile-data.mts'

describe('unit-d:interfaces/CompileData', () => {
  it('should register event compilation data', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
