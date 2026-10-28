/**
 * @file Type Tests - Whitespace
 * @module mark-util-character/types/tests/unit-d/Whitespace
 */

import type { Space } from '@flex-development/mark-util-character'
import type { codes } from '@flex-development/mark-util-symbol'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../whitespace.mts'

describe('unit-d:types/Whitespace', () => {
  it('should extract Space', () => {
    expectTypeOf<TestSubject>().extract<Space>().not.toBeNever()
  })

  it('should extract typeof codes.horizontalTab', () => {
    // Arrange
    type Extract = typeof codes.horizontalTab | typeof codes.vht

    // Expect
    expectTypeOf<TestSubject>().extract<Extract>().not.toBeNever()
  })

  it('should extract typeof codes.ht', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.ht>().not.toBeNever()
  })
})
