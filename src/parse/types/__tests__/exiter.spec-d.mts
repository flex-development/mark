/**
 * @file Type Tests - Exiter
 * @module mark/parse/types/tests/unit-d/Exiter
 */

import type { Context, Effects } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../exiter.mts'

describe('unit-d:types/Exiter', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Effects]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Effects]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
