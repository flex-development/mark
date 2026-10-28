/**
 * @file Type Tests - ParseContext
 * @module mark/parse/interfaces/tests/unit-d/ParseContext
 */

import type {
  FullNormalizedExtension,
  Parsers
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
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
