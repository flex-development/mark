/**
 * @file Type Tests - ExtensionPack
 * @module mark/compile/types/tests/unit-d/ExtensionPack
 */

import type {
  CreateExtensions,
  Extension
} from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension-pack.mts'

describe('unit-d:compile/types/ExtensionPack', () => {
  it('should allow CreateExtensions', () => {
    expectTypeOf<TestSubject>().extract<CreateExtensions>().not.toBeNever()
  })

  it('should allow Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should allow List<CreateExtensions | Extension | List<Extension>>', () => {
    expectTypeOf<TestSubject>()
      .extract<List<CreateExtensions | Extension | List<Extension>>>()
      .not.toBeNever()
  })
})
