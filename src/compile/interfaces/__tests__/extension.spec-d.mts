/**
 * @file Type Tests - Extension
 * @module fsm/compile/interfaces/tests/unit-d/Extension
 */

import type { Handles, Transform } from '@flex-development/fsm/compile'
import type { List } from '@flex-development/fsm/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../extension.mts'

describe('unit-d:interfaces/Extension', () => {
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
