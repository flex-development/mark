/**
 * @file Type Tests - MarkerInfo
 * @module mark/parse/interfaces/tests/unit-d/MarkerInfo
 */

import type {
  CodeCheck,
  Marker,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../marker-info.mts'

describe('unit-d:parse/interfaces/MarkerInfo', () => {
  it('should match [code: CodeCheck | Marker | true]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<CodeCheck | Marker | true>()
  })

  it('should match [fields?: TokenFields | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fields')
      .toEqualTypeOf<Nilable<TokenFields>>()
  })

  it('should match [optional?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optional')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [type?: TokenType | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Nilable<TokenType>>()
  })
})
