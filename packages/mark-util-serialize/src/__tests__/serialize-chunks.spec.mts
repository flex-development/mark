/**
 * @file Unit Tests - serializeChunks
 * @module mark-util-serialize/utils/tests/unit/serializeChunks
 */

import { chars, codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../serialize-chunks.mts'

describe('unit:utils/serializeChunks', () => {
  it.each<Parameters<typeof testSubject>>([
    [[codes.bos, codes.sof, codes.empty]],
    [[codes.lineFeed, codes.carriageReturn, codes.carriageReturnLineFeed]],
    [[codes.horizontalTab, codes.virtualSpace, codes.digit1]],
    [[codes.horizontalTab, codes.virtualSpace, codes.digit3], true],
    [[codes.digit3, codes.break, '13'], { breaks: chars.slash }],
    [[codes.lowercaseH, codes.break, codes.lowercaseI]],
    [['hello', codes.break, 'world'], { breaks: true }]
  ])('should return string value of `chunks` (%#)', (chunks, options) => {
    expect(testSubject(chunks, options)).toMatchSnapshot()
  })
})
