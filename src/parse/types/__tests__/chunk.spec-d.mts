/**
 * @file Type Tests - Chunk
 * @module mark/parse/types/tests/unit-d/Chunk
 */

import type { Code } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../chunk.mts'

describe('unit-d:types/Chunk', () => {
  it('should extract Code', () => {
    expectTypeOf<TestSubject>().extract<Code>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })
})
