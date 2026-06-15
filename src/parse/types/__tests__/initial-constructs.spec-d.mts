/**
 * @file Type Tests - InitialConstructs
 * @module fsm/parse/types/tests/unit-d/InitialConstructs
 */

import type {
  ContentType,
  InitialConstruct
} from '@flex-development/fsm/parse'
import type TestSubject from '../initial-constructs.mts'

describe('unit-d:types/InitialConstructs', () => {
  it('should equal Record<ContentType, InitialConstruct>', () => {
    // Arrange
    type Expect = Record<ContentType, InitialConstruct>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
