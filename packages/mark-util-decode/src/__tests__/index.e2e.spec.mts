/**
 * @file E2E Tests - api
 * @module mark-util-decode/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-decode'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-util-decode', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
