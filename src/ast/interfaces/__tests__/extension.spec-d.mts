/**
 * @file Type Tests - Extension
 * @module mark/ast/interfaces/tests/unit-d/Extension
 */

import type { Handles, Transform } from '@flex-development/mark/ast'
import type * as compile from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension.mts'

describe('unit-d:interfaces/Extension', () => {
  it('should extend compile.Extension', () => {
    expectTypeOf<TestSubject>().toExtend<compile.Extension>()
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
