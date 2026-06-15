/**
 * @file Type Tests - FileLike
 * @module fsm/parse/types/tests/unit-d/FileLike
 */

import type { Value } from '@flex-development/fsm/parse'
import type TestSubject from '../file-like.mts'

describe('unit-d:types/FileLike', () => {
  it('should match [value: Value]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<Value>()
  })
})
