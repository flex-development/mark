/**
 * @file Type Tests - CompileData
 * @module mark/compile/interfaces/tests/unit-d/CompileData
 */

import type * as compile from '@flex-development/mark/compile'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-data.mts'

describe('unit-d:interfaces/CompileData', () => {
  it('should extend compile.CompileData', () => {
    expectTypeOf<TestSubject>().toExtend<compile.CompileData>()
  })

  it('should register event compilation data', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
