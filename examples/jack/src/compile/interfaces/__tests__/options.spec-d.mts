/**
 * @file Type Tests - Options
 * @module examples/jack/compile/interfaces/tests/unit-d/Options
 */

import type {
  CreateExtensions,
  Extension
} from '@flex-development/mark/ast'
import type { List } from '@flex-development/mark/core'
import type { Point, PreprocessOptions } from '@flex-development/mark/parse'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../options.mts'

describe('unit-d:compile/interfaces/Options', () => {
  it('should extend PreprocessOptions', () => {
    expectTypeOf<TestSubject>().toExtend<PreprocessOptions>()
  })

  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toExtend<OptionalKeys<TestSubject>>()
  })

  it('should match [extensions?: CreateExtensions | List<Extension | List<Extension>> | null | undefined]', () => {
    // Arrange
    type Expect =
      | CreateExtensions
      | List<Extension | List<Extension>>
      | null
      | undefined

    // Expect
    expectTypeOf<TestSubject>()
      .toHaveProperty('extensions')
      .toEqualTypeOf<Expect>()
  })

  it('should match [from?: Point | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('from')
      .toEqualTypeOf<Nilable<Point>>()
  })
})
