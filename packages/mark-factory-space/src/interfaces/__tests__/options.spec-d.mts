/**
 * @file Type Tests - Options
 * @module mark-factory-space/interfaces/tests/unit-d/Options
 */

import type {
  State,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../options.mts'

describe('unit-d:interfaces/Options', () => {
  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })

  it('should match [fields?: TokenFields | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fields')
      .toEqualTypeOf<Nilable<TokenFields>>()
  })

  it('should match [max?: number | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('max')
      .toEqualTypeOf<Nilable<number>>()
  })

  it('should match [nok?: State | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nok')
      .toEqualTypeOf<Nilable<State>>()
  })

  it('should match [type?: TokenType | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Nilable<TokenType>>()
  })
})
