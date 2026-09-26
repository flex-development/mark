/**
 * @file Type Tests - ConstructRecord
 * @module mark/parse/interfaces/tests/unit-d/ConstructRecord
 */

import type { ConstructPack } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct-record.mts'

describe('unit-d:interfaces/ConstructRecord', () => {
  type Value = Nilable<ConstructPack>

  it('should match [[x: Numeric]: ConstructPack | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('42')
      .toEqualTypeOf<Value>()
  })

  it('should match [[x: number]: ConstructPack | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(32)
      .toEqualTypeOf<Value>()
  })

  it('should match [null: ConstructPack | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('null')
      .toEqualTypeOf<Value>()
  })
})
