/**
 * @file E2E Tests - api
 * @module mark-factory-markers/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-factory-markers'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-factory-markers', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
