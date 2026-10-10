/**
 * @file Type Tests - Handle
 * @module mark/compile/types/tests/unit-d/Handle
 */

import type { Context } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../handle.mts'

describe('unit-d:types/Handle', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
