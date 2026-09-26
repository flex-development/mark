/**
 * @file Type Tests - CompileResultMap
 * @module mark/compile/interfaces/tests/unit-d/CompileResultMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-result-map.mts'

describe('unit-d:interfaces/CompileResultMap', () => {
  it('should register event compilation results', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
