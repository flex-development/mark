/**
 * @file Type Tests - Numeric
 * @module mark/core/types/tests/unit-d/Numeric
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../numeric.mts'

describe('unit-d:types/Numeric', () => {
  it('should equal `${number}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`${number}`>()
  })
})
