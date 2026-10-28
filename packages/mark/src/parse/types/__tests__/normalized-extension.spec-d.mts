/**
 * @file Type Tests - NormalizedExtension
 * @module mark/parse/types/tests/unit-d/NormalizedExtension
 */

import type {
  ConstructRecord,
  ContentType,
  Extension
} from '@flex-development/mark/parse'
import type { NIL } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../normalized-extension.mts'

describe('unit-d:types/NormalizedExtension', () => {
  it('should extend `Extension`', () => {
    expectTypeOf<TestSubject>().toExtend<Extension>()
  })

  it('should remove `NIL` from `Extension` properties', () => {
    // Arrange
    type K = Exclude<keyof Extension, ContentType>
    type V = Exclude<Extension[K], NIL>
    type U = Record<K, V> & Record<ContentType, ConstructRecord>

    // Expect
    expectTypeOf<TestSubject>().toExtend<Partial<U>>()
  })
})
