/**
 * @file Type Tests - ConstructNameMap
 * @module mark/parse/interfaces/tests/unit-d/ConstructNameMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct-name-map.mts'

describe('unit-d:parse/interfaces/ConstructNameMap', () => {
  it('should register construct names', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
  })
})
