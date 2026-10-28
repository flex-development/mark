/**
 * @file Type Tests - TokenTypeMap
 * @module mark/parse/interfaces/tests/unit-d/TokenTypeMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../token-type-map.mts'

describe('unit-d:interfaces/TokenTypeMap', () => {
  it('should register token types', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
