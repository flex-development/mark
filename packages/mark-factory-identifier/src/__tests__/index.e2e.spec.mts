/**
 * @file E2E Tests - api
 * @module mark-factory-identifier/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-factory-identifier'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-factory-identifier', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
