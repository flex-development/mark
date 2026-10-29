/**
 * @file Type Tests - Config
 * @module mark/ast/interfaces/tests/unit-d/Config
 */

import type {
  Extension,
  Handle,
  Handles,
  Postprocess,
  Preprocess,
  Transform
} from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../config.mts'

describe('unit-d:interfaces/Config', () => {
  it('should extend Extension', () => {
    expectTypeOf<TestSubject>().toExtend<Extension>()
  })

  it('should match [afterEnter: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterEnter')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [afterExit: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterExit')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [beforeEnter: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeEnter')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [beforeExit: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeExit')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [enter: Handles]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('enter').toEqualTypeOf<Handles>()
  })

  it('should match [exit: Handles]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('exit').toEqualTypeOf<Handles>()
  })

  it('should match [postprocess: Postprocess[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postprocess')
      .toEqualTypeOf<Postprocess[]>()
  })

  it('should match [preprocess: Preprocess[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Preprocess[]>()
  })

  it('should match [transforms: Transform[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('transforms')
      .toEqualTypeOf<Transform[]>()
  })
})
