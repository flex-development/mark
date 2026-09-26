/**
 * @file Type Tests - ParseOptions
 * @module mark/parse/interfaces/tests/unit-d/ParseOptions
 */

import type { Extensions } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../parse-options.mts'

describe('unit-d:interfaces/ParseOptions', () => {
  it('should match [extensions?: Extensions | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extensions')
      .toEqualTypeOf<Nilable<Extensions>>()
  })
})
