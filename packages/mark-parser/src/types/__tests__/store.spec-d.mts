/**
 * @file Type Tests - Store
 * @module mark-parser/types/tests/unit-d/Store
 */

import type { Info } from '@flex-development/mark-parser'
import type { EmptyArray } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../store.mts'

describe('unit-d:types/Store', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<EmptyArray>()
    })
  })

  describe('returns', () => {
    it('should return Info', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Info>()
    })
  })
})
