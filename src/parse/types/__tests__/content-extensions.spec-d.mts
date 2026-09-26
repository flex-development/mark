/**
 * @file Type Tests - ContentExtensions
 * @module mark/parse/types/tests/unit-d/ContentExtensions
 */

import type {
  ConstructRecord,
  ContentType
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../content-extensions.mts'

describe('unit-d:types/ContentExtensions', () => {
  it('should match Partial<Record<ContentType, ConstructRecord | null | undefined>>', () => {
    // Arrange
    type Expect = Partial<Record<
      ContentType,
      ConstructRecord | null | undefined
    >>

    // Expect
    expectTypeOf<TestSubject>().toMatchObjectType<Expect>()
  })
})
