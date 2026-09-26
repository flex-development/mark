/**
 * @file Type Tests - TakeExtension
 * @module mark/ast/types/tests/unit-d/TakeExtension
 */

import type { Config, Extension } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../take-extension.mts'

describe('unit-d:types/TakeExtension', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Config, Extension, (keyof Extension | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Config, Extension, (keyof Extension | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<null | undefined>()
    })
  })
})
