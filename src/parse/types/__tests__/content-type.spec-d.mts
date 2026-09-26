/**
 * @file Type Tests - ContentType
 * @module mark/parse/types/tests/unit-d/ContentType
 */

import type { ContentTypeMap } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../content-type.mts'

describe('unit-d:types/ContentType', () => {
  it('should equal ContentTypeMap[keyof ContentTypeMap]', () => {
    // Arrange
    type Expect = ContentTypeMap[keyof ContentTypeMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
