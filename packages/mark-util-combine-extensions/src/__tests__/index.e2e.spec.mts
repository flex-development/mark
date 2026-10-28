/**
 * @file E2E Tests - api
 * @module mark-util-combine-extensions/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-combine-extensions'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-util-combine-extensions', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
