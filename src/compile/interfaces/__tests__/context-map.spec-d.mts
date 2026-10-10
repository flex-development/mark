/**
 * @file Type Tests - ContextMap
 * @module mark/compile/interfaces/tests/unit-d/ContextMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../context-map.mts'

describe('unit-d:interfaces/ContextMap', () => {
  it('should register compilation contexts', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
