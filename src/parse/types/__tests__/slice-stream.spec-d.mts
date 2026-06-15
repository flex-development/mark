/**
 * @file Type Tests - SliceStream
 * @module fsm/parse/types/tests/unit-d/SliceStream
 */

import type { Chunk, Range } from '@flex-development/fsm/parse'
import type TestSubject from '../slice-stream.mts'

describe('unit-d:types/SliceStream', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Range]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Range]>()
    })
  })

  describe('returns', () => {
    it('should return Chunk[]', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Chunk[]>()
    })
  })
})
