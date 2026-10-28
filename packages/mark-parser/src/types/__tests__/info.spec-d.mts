/**
 * @file Type Tests - Info
 * @module mark-parser/types/tests/unit-d/Info
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../info.mts'
import type Restore from '../restore.mts'

describe('unit-d:types/Info', () => {
  it('should match [from: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('from').toEqualTypeOf<number>()
  })

  it('should match [restore: Restore]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('restore')
      .toEqualTypeOf<Restore>()
  })
})
