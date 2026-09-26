/**
 * @file Type Tests - Writable
 * @module mark/parse/types/tests/unit-d/Writable
 */

import type { List } from '@flex-development/mark/core'
import type { Chunk } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../writable.mts'

describe('unit-d:types/Writable', () => {
  it('should extract Chunk', () => {
    expectTypeOf<TestSubject>().extract<Chunk>().not.toBeNever()
  })

  it('should extract List<Chunk>', () => {
    expectTypeOf<TestSubject>().extract<List<Chunk>>().not.toBeNever()
  })
})
