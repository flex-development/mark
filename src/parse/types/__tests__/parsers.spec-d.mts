/**
 * @file Type Tests - Parsers
 * @module mark/parse/types/tests/unit-d/Parsers
 */

import type { ContentType, Create } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../parsers.mts'

describe('unit-d:types/Parsers', () => {
  it('should match Record<ContentType, Create>', () => {
    // Arrange
    type Expect = Record<ContentType, Create>

    // Expect
    expectTypeOf<TestSubject>().toMatchObjectType<Expect>()
  })
})
