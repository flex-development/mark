/**
 * @file Type Tests - Parsers
 * @module fsm/parse/types/tests/unit-d/Parsers
 */

import type { ContentType, Create } from '@flex-development/fsm/parse'
import type TestSubject from '../parsers.mts'

describe('unit-d:types/Parsers', () => {
  it('should match Record<ContentType, Create>', () => {
    // Arrange
    type Expect = Record<ContentType, Create>

    // Expect
    expectTypeOf<TestSubject>().toMatchObjectType<Expect>()
  })
})
