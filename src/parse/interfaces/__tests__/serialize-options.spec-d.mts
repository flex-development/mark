/**
 * @file Type Tests - SerializeOptions
 * @module mark/parse/interfaces/tests/unit-d/SerializeOptions
 */

import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialize-options.mts'

describe('unit-d:interfaces/SerializeOptions', () => {
  it('should match [breaks?: boolean | string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('breaks')
      .toEqualTypeOf<Nilable<boolean | string>>()
  })

  it('should match [expandTabs?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('expandTabs')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
