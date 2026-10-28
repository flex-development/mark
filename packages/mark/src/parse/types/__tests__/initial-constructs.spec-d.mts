/**
 * @file Type Tests - InitialConstructs
 * @module mark/parse/types/tests/unit-d/InitialConstructs
 */

import type {
  ContentType,
  InitialConstruct
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../initial-constructs.mts'

describe('unit-d:types/InitialConstructs', () => {
  it('should equal Record<ContentType, InitialConstruct>', () => {
    // Arrange
    type Expect = Record<ContentType, InitialConstruct>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
