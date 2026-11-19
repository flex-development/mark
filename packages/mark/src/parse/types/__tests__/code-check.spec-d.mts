/**
 * @file Type Tests - CodeCheck
 * @module mark/parse/types/tests/unit-d/CodeCheck
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../code-check.mts'

describe('unit-d:parse/types/CodeCheck', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [unknown]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[unknown]>()
    })
  })

  describe('returns', () => {
    it('should return boolean', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<boolean>()
    })
  })
})
