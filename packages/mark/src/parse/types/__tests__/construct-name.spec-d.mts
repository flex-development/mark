/**
 * @file Type Tests - ConstructName
 * @module mark/parse/types/tests/unit-d/ConstructName
 */

import type { IfNever } from '@flex-development/mark/core'
import type { ConstructNameMap } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct-name.mts'

describe('unit-d:parse/types/ConstructName', () => {
  it('should equal IfNever<keyof ConstructNameMap, string, ConstructNameMap[keyof ConstructNameMap]>', () => {
    // Arrange
    type Registered = ConstructNameMap[keyof ConstructNameMap]
    type Expect = IfNever<keyof ConstructNameMap, string, Registered>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
