/**
 * @file Type Tests - CreateExtensions
 * @module fsm/compile/types/tests/unit-d/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/fsm/compile'
import type { List } from '@flex-development/fsm/parse'
import type TestSubject from '../create-extensions.mts'

describe('unit-d:types/CreateExtensions', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Opener, Closer, Buffer]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Opener, Closer, Buffer]>()
    })
  })

  describe('returns', () => {
    it('should return Extension | List<Extension>', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Extension | List<Extension>>()
    })
  })
})
