/**
 * @file Type Tests - ExtensionPackList
 * @module mark/compile/types/tests/unit-d/ExtensionPackList
 */

import type { ExtensionPack } from '@flex-development/mark/compile'
import type { List } from '@flex-development/mark/core'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension-pack-list.mts'

describe('unit-d:compile/types/ExtensionPackList', () => {
  it('should equal List<ExtensionPack>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<List<ExtensionPack>>()
  })
})
