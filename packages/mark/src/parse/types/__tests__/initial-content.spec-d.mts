/**
 * @file Type Tests - InitialContent
 * @module mark/parse/types/tests/unit-d/InitialContent
 */

import type {
  ContentType,
  InitialConstruct
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../initial-content.mts'

describe('unit-d:parse/types/InitialContent', () => {
  it('should equal Record<ContentType, InitialConstruct>', () => {
    // Arrange
    type Expect = Record<ContentType, InitialConstruct>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
