/**
 * @file Type Tests - Extension
 * @module mark/compile/interfaces/tests/unit-d/Extension
 */

import type { Handle, Handles, Transform } from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension.mts'

describe('unit-d:interfaces/Extension', () => {
  it('should match [afterEnter?: Handle | List<Handle> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterEnter')
      .toEqualTypeOf<Nilable<Handle | List<Handle>>>()
  })

  it('should match [afterExit?: Handle | List<Handle> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterExit')
      .toEqualTypeOf<Nilable<Handle | List<Handle>>>()
  })

  it('should match [beforeEnter?: Handle | List<Handle> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeEnter')
      .toEqualTypeOf<Nilable<Handle | List<Handle>>>()
  })

  it('should match [beforeExit?: Handle | List<Handle> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeExit')
      .toEqualTypeOf<Nilable<Handle | List<Handle>>>()
  })

  it('should match [enter?: Handles | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enter')
      .toEqualTypeOf<Nilable<Handles>>()
  })

  it('should match [exit?: Handles | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exit')
      .toEqualTypeOf<Nilable<Handles>>()
  })

  it('should match [transforms?: List<Transform> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('transforms')
      .toEqualTypeOf<Nilable<List<Transform>>>()
  })
})
