/**
 * @file Type Tests - Disable
 * @module fsm/parse/types/tests/unit-d/Disable
 */

import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../disable.mts'

describe('unit-d:types/Disable', () => {
  it('should match [null?: string[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('null')
      .toEqualTypeOf<Nilable<string[]>>()
  })
})
