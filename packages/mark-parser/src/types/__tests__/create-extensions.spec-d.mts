/**
 * @file Type Tests - CreateExtensions
 * @module mark-parser/types/tests/unit-d/CreateExtensions
 */

import type { Extensions } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-extensions.mts'

describe('unit-d:types/CreateExtensions', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return Extensions', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Extensions>()
    })
  })
})
