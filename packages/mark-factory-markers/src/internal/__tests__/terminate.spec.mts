/**
 * @file Unit Tests - terminate
 * @module mark-factory-markers/internal/tests/unit/terminate
 */

import type { State } from '@flex-development/mark/parse'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import testSubject from '../terminate.mts'

describe('unit:internal/terminate', () => {
  let nok: State
  let ok: State

  beforeEach(() => {
    nok = vi.fn().mockName('nok')
    ok = vi.fn().mockName('ok')
  })

  it('should return `nok` if `optional` is `false`', () => {
    expect(testSubject(false, ok, nok)).to.eq(nok)
  })

  it('should return `nok` if `optional` is `undefined`', () => {
    expect(testSubject(undefined, ok, nok)).to.eq(nok)
  })

  it('should return `ok` if `optional` is `true`', () => {
    expect(testSubject(true, ok, nok)).to.eq(ok)
  })
})
