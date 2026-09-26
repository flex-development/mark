/**
 * @file Type Tests - EventType
 * @module mark/parse/types/tests/unit-d/EventType
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../event-type.mts'

describe('unit-d:types/EventType', () => {
  it('should extract "enter"', () => {
    expectTypeOf<TestSubject>().extract<'enter'>().not.toBeNever()
  })

  it('should extract "exit"', () => {
    expectTypeOf<TestSubject>().extract<'exit'>().not.toBeNever()
  })
})
