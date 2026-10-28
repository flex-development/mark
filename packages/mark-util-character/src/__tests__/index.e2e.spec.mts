/**
 * @file E2E Tests - api
 * @module mark-util-character/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-character'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-util-character', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
