/**
 * @file Type Tests - Extensions
 * @module mark/compile/types/tests/unit-d/Extensions
 */

import type {
  CreateExtensions,
  Extension,
  ExtensionPack,
  ExtensionPackList
} from '@flex-development/mark/compile'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extensions.mts'

describe('unit-d:compile/types/Extensions', () => {
  it('should allow CreateExtensions', () => {
    expectTypeOf<TestSubject>().extract<CreateExtensions>().not.toBeNever()
  })

  it('should allow Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should allow ExtensionPack', () => {
    expectTypeOf<TestSubject>().extract<ExtensionPack>().not.toBeNever()
  })

  it('should allow ExtensionPackList', () => {
    expectTypeOf<TestSubject>().extract<ExtensionPackList>().not.toBeNever()
  })
})
