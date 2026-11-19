/**
 * @file Type Tests - CreateExtensions
 * @module mark/compile/types/tests/unit-d/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  ExtensionList,
  Opener
} from '@flex-development/mark/compile'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-extensions.mts'

describe('unit-d:compile/types/CreateExtensions', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Opener, Closer, Buffer]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Opener, Closer, Buffer]>()
    })
  })

  describe('returns', () => {
    it('should return Extension | ExtensionList', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Extension | ExtensionList>()
    })
  })
})
