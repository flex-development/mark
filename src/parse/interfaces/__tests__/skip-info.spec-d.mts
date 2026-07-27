/**
 * @file Type Tests - SkipInfo
 * @module mark-parser/interfaces/tests/unit-d/SkipInfo
 */

import type { Code } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../skip-info.mts'

describe('unit-d:interfaces/SkipInfo', () => {
  it('should match [code?: Code | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<Code | undefined>()
  })

  it('should match [restore?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('restore')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
