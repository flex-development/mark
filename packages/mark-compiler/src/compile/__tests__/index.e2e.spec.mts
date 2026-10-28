/**
 * @file E2E Tests - api
 * @module mark-compiler/compile/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-compiler/compile'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-compiler/compile', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
