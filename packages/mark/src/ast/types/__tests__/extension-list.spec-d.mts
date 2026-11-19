/**
 * @file Type Tests - ExtensionList
 * @module mark/ast/types/tests/unit-d/ExtensionList
 */

import type { Extension } from '@flex-development/mark/ast'
import type { List } from '@flex-development/mark/core'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension-list.mts'

describe('unit-d:ast/types/ExtensionList', () => {
  it('should equal List<Extension | List<Extension>>', () => {
    // Arrange
    type Expect = List<Extension | List<Extension>>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
