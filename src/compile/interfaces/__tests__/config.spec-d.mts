/**
 * @file Type Tests - Config
 * @module fsm/compile/interfaces/tests/unit-d/Config
 */

import type {
  Extension,
  Handles,
  Transform
} from '@flex-development/fsm/compile'
import type TestSubject from '../config.mts'

describe('unit-d:interfaces/Config', () => {
  it('should extend Extension', () => {
    expectTypeOf<TestSubject>().toExtend<Extension>()
  })

  it('should match [enter: Handles]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('enter').toEqualTypeOf<Handles>()
  })

  it('should match [exit: Handles]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('exit').toEqualTypeOf<Handles>()
  })

  it('should match [transforms: Transform[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('transforms')
      .toEqualTypeOf<Transform[]>()
  })
})
