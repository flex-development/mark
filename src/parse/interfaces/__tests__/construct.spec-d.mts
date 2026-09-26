/**
 * @file Type Tests - Construct
 * @module mark/parse/interfaces/tests/unit-d/Construct
 */

import type {
  ConstructPosition,
  Exiter,
  Previous,
  Resolver,
  Tokenizer
} from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct.mts'

describe('unit-d:interfaces/Construct', () => {
  it('should match [add?: ConstructPosition | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('add')
      .toEqualTypeOf<Nilable<ConstructPosition>>()
  })

  it('should match [concrete?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('concrete')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [continuation?: Construct | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('continuation')
      .toEqualTypeOf<Nilable<TestSubject>>()
  })

  it('should match [exit?: Exiter | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exit')
      .toEqualTypeOf<Nilable<Exiter>>()
  })

  it('should match [name?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [partial?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('partial')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [previous?: Previous | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('previous')
      .toEqualTypeOf<Nilable<Previous>>()
  })

  it('should match [resolve?: Resolver | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolve')
      .toEqualTypeOf<Nilable<Resolver>>()
  })

  it('should match [resolveAll?: Resolver | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolveAll')
      .toEqualTypeOf<Nilable<Resolver>>()
  })

  it('should match [resolveTo?: Resolver | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolveTo')
      .toEqualTypeOf<Nilable<Resolver>>()
  })

  it('should match [tokenize: Tokenizer]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenize')
      .toEqualTypeOf<Tokenizer>()
  })
})
