/**
 * @file Type Tests - ParseContext
 * @module fsm/parse/interfaces/tests/unit-d/ParseContext
 */

import type {
  FullNormalizedExtension,
  Parsers
} from '@flex-development/fsm/parse'
import type TestSubject from '../parse-context.mts'

describe('unit-d:interfaces/ParseContext', () => {
  it('should extend Parsers', () => {
    expectTypeOf<TestSubject>().toExtend<Parsers>()
  })

  it('should match [constructs: FullNormalizedExtension]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('constructs')
      .toEqualTypeOf<FullNormalizedExtension>()
  })
})
