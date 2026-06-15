/**
 * @file Type Tests - Encoding
 * @module fsm/parse/types/tests/unit-d/Encoding
 */

import type { EncodingMap } from '@flex-development/fsm/parse'
import type TestSubject from '../encoding.mts'

describe('unit-d:types/Encoding', () => {
  it('should equal EncodingMap[keyof EncodingMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<EncodingMap[keyof EncodingMap]>()
  })
})
