/**
 * @file Type Tests - Extension
 * @module mark/parse/interfaces/tests/unit-d/Extension
 */

import type {
  ContentExtensions,
  Disable
} from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension.mts'

describe('unit-d:interfaces/Extension', () => {
  it('should extend ContentExtensions', () => {
    expectTypeOf<TestSubject>().toExtend<ContentExtensions>()
  })

  it('should match [disable?: Disable | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disable')
      .toEqualTypeOf<Nilable<Disable>>()
  })
})
