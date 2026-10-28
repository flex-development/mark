/**
 * @file E2E Tests - api
 * @module mark-util-resolve-all/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-resolve-all'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-util-resolve-all', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
