/**
 * @file Type Tests - Space
 * @module mark-util-character/types/tests/unit-d/Space
 */

import type { codes } from '@flex-development/mark-util-symbol'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../space.mts'

describe('unit-d:types/Space', () => {
  it('should extract typeof codes.space', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.space>().not.toBeNever()
  })

  it('should extract typeof codes.virtualSpace', () => {
    // Arrange
    type Extract = typeof codes.virtualSpace | typeof codes.vs

    // Expect
    expectTypeOf<TestSubject>().extract<Extract>().not.toBeNever()
  })
})
