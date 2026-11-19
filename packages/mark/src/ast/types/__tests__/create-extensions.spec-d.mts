/**
 * @file Type Tests - CreateExtensions
 * @module mark/ast/types/tests/unit-d/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  ExtensionList,
  Opener
} from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-extensions.mts'

describe('unit-d:ast/types/CreateExtensions', () => {
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
