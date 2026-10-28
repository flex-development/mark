/**
 * @file Type Tests - StackedToken
 * @module mark/compile/types/tests/unit-d/StackedToken
 */

import type { OnEnterError } from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../stacked-token.mts'

describe('unit-d:types/StackedToken', () => {
  it('should match [0: Token]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('0').toEqualTypeOf<Token>()
  })

  it('should match [1: OnEnterError]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('1')
      .toEqualTypeOf<Nilable<OnEnterError>>()
  })

  it('should match [length: 2]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('length').toEqualTypeOf<2>()
  })
})
