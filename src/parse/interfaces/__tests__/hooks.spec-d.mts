/**
 * @file Type Tests - Hooks
 * @module mark/parse/interfaces/tests/unit-d/Hooks
 */

import type {
  AfterConsume,
  AfterEnter,
  AfterExit,
  AfterRestore,
  BeforeConsume,
  BeforeEnter,
  BeforeExit,
  BeforeRestore
} from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../hooks.mts'

describe('unit-d:interfaces/Hooks', () => {
  it('should match [afterConsume?: AfterConsume | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterConsume')
      .toEqualTypeOf<Nilable<AfterConsume>>()
  })

  it('should match [afterEnter?: AfterEnter | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterEnter')
      .toEqualTypeOf<Nilable<AfterEnter>>()
  })

  it('should match [afterExit?: AfterExit | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterExit')
      .toEqualTypeOf<Nilable<AfterExit>>()
  })

  it('should match [afterRestore?: AfterRestore | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterRestore')
      .toEqualTypeOf<Nilable<AfterRestore>>()
  })

  it('should match [beforeConsume?: BeforeConsume | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeConsume')
      .toEqualTypeOf<Nilable<BeforeConsume>>()
  })

  it('should match [beforeEnter?: BeforeEnter | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeEnter')
      .toEqualTypeOf<Nilable<BeforeEnter>>()
  })

  it('should match [beforeExit?: BeforeExit | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeExit')
      .toEqualTypeOf<Nilable<BeforeExit>>()
  })

  it('should match [beforeRestore?: BeforeRestore | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeRestore')
      .toEqualTypeOf<Nilable<BeforeRestore>>()
  })
})
