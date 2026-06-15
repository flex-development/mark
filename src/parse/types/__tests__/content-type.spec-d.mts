/**
 * @file Type Tests - ContentType
 * @module fsm/parse/types/tests/unit-d/ContentType
 */

import type { ContentTypeMap } from '@flex-development/fsm/parse'
import type TestSubject from '../content-type.mts'

describe('unit-d:types/ContentType', () => {
  it('should equal ContentTypeMap[keyof ContentTypeMap]', () => {
    // Arrange
    type Expect = ContentTypeMap[keyof ContentTypeMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
