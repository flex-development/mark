/**
 * @file Type Tests - Chunk
 * @module fsm/parse/types/tests/unit-d/Chunk
 */

import type { Code } from '@flex-development/fsm/parse'
import type TestSubject from '../chunk.mts'

describe('unit-d:types/Chunk', () => {
  it('should extract Code', () => {
    expectTypeOf<TestSubject>().extract<Code>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })
})
