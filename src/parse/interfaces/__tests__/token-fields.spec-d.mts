/**
 * @file Type Tests - TokenFields
 * @module fsm/parse/interfaces/tests/unit-d/TokenFields
 */

import type {
  ContentType,
  Token,
  TokenizeContext
} from '@flex-development/fsm/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../token-fields.mts'

describe('unit-d:interfaces/TokenFields', () => {
  it('should match [_tokenizer?: TokenizeContext | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('_tokenizer')
      .toEqualTypeOf<Nilable<TokenizeContext>>()
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
