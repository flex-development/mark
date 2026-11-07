/**
 * @file Type Tests - InitialConstructs
 * @module mark/parse/interfaces/tests/unit-d/InitialConstructs
 */

import type { InitialContent } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../initial-constructs.mts'

describe('unit-d:parse/interfaces/InitialConstructs', () => {
  it('should extend InitialContent', () => {
    expectTypeOf<TestSubject>().toExtend<InitialContent>()
  })
})
