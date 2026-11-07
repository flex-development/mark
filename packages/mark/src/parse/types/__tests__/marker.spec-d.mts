/**
 * @file Type Tests - Marker
 * @module mark/parse/tests/unit-d/Marker
 */

import type { Code } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../marker.mts'

describe('unit-d:parse/types/Marker', () => {
  it('should equal NonNullable<Code>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NonNullable<Code>>()
  })
})
