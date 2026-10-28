/**
 * @file Type Tests - FileLike
 * @module mark/parse/types/tests/unit-d/FileLike
 */

import type { Value } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../file-like.mts'

describe('unit-d:types/FileLike', () => {
  it('should match [value: Value]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<Value>()
  })
})
