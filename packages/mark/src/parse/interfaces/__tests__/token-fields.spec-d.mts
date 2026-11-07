/**
 * @file Type Tests - TokenFields
 * @module mark/parse/interfaces/tests/unit-d/TokenFields
 */

import type { IfNever } from '@flex-development/mark/core'
import type {
  ContentType,
  Context,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../token-fields.mts'

describe('unit-d:parse/interfaces/TokenFields', () => {
  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })

  it('should match [_tokenizer?: IfNever<Context, TokenizeContext, Context> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('_tokenizer')
      .toEqualTypeOf<Nilable<IfNever<Context, TokenizeContext, Context>>>()
  })

  it('should match [contentType?: ContentType | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('contentType')
      .toEqualTypeOf<Nilable<ContentType>>()
  })

  it('should match [next?: Token | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('next')
      .toEqualTypeOf<Nilable<Token>>()
  })

  it('should match [previous?: Token | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('previous')
      .toEqualTypeOf<Nilable<Token>>()
  })
})
