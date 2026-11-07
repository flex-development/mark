/**
 * @file E2E Tests - api
 * @module mark-factory-space/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-factory-space'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-factory-space', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
