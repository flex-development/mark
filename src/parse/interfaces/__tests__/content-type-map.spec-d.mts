/**
 * @file Type Tests - ContentTypeMap
 * @module mark/parse/interfaces/tests/unit-d/ContentTypeMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../content-type-map.mts'

describe('unit-d:interfaces/ContentTypeMap', () => {
  it('should register content types', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
