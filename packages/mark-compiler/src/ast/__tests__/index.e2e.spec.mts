/**
 * @file E2E Tests - api
 * @module mark-compiler/ast/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-compiler/ast'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-compiler/ast', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
