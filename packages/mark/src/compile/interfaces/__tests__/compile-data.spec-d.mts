/**
 * @file Type Tests - CompileData
 * @module mark/compile/interfaces/tests/unit-d/CompileData
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-data.mts'

describe('unit-d:interfaces/CompileData', () => {
  it('should register event compilation data', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
