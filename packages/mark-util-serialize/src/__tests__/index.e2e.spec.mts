/**
 * @file E2E Tests - api
 * @module mark-util-serialize/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-serialize'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-util-serialize', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
