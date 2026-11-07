/**
 * @file E2E Tests - api
 * @module mark-util-subtokenize/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-subtokenize'
import { describe, expect, it } from 'vitest'

describe('e2e:mark-util-subtokenize', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
