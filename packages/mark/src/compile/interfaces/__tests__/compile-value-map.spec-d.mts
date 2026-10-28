/**
 * @file Type Tests - CompileValueMap
 * @module mark/compile/interfaces/tests/unit-d/CompileValueMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-value-map.mts'

describe('unit-d:interfaces/CompileValueMap', () => {
  it('should register event compilation values', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
