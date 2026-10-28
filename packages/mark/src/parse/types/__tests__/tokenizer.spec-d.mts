/**
 * @file Type Tests - Tokenizer
 * @module mark/parse/types/tests/unit-d/Tokenizer
 */

import type { Context, Effects, State } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../tokenizer.mts'

describe('unit-d:types/Tokenizer', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Effects, State, State]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Effects, State, State]>()
    })
  })

  describe('returns', () => {
    it('should return State', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<State>()
    })
  })
})
