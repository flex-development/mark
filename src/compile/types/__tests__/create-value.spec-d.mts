/**
 * @file Type Tests - CreateValue
 * @module mark/compile/types/tests/unit-d/CreateValue
 */

import type { CompileValue } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-value.mts'

describe('unit-d:types/CreateValue', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return V', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<CompileValue>()
    })
  })
})
