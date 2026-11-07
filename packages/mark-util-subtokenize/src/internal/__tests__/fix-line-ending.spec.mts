/**
 * @file Unit Tests - fixLineEnding
 * @module mark-util-subtokenize/internal/tests/unit/fixLineEnding
 */

import type { LineEnding } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type { Place, Token } from '@flex-development/mark/parse'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import testSubject from '../fix-line-ending.mts'

describe('unit:internal/fixLineEnding', () => {
  describe('fix', () => {
    let end: Place
    let start: Place

    beforeAll(() => {
      start = { _bufferIndex: -1, _index: 1, column: 2, line: 1, offset: 1 }
      end = { _bufferIndex: -1, _index: 2, column: 2, line: 2, offset: 4 }
    })

    it.each<[code: LineEnding]>([
      [codes.carriageReturnLineFeed],
      [codes.carriageReturn],
      [codes.lineFeed]
    ])('should fix end position of `token` (%j)', code => {
      // Arrange
      const token: Token = { type: 'lineEnding' } as Token

      // Setup
      token.start = { ...start }
      token.end = { ...end }

      // Act
      testSubject(vi.fn(() => [code]).mockName('sliceStream'), token)

      // Expect
      expect(token.start).to.eql(start)
      expect(token.end._bufferIndex).to.eq(end._bufferIndex)
      expect(token.end._index).to.eq(end._index)
      expect(token.end.column).to.eq(1).and.not.eq(end.column)
      expect(token.end.offset).to.be.gte(0).and.lt(end.offset)
      expect(token).toMatchSnapshot()
    })
  })

  describe('noop', () => {
    it('should do nothing if `token` does not represent line ending', () => {
      // Arrange
      const token: Token = { type: 'eoc' } as Token
      let place: Place

      // Setup
      place = { _bufferIndex: -1, _index: 8, column: 3, line: 5, offset: 122 }
      token.start = { ...place }
      token.end = { ...place }

      // Act
      testSubject(vi.fn(() => [codes.eos]).mockName('sliceStream'), token)

      // Expect
      expect(token.start).to.eql(place)
      expect(token.end).to.eql(place)
      expect(token).toMatchSnapshot()
    })

    it('should do nothing if `token` ends at column `1`', () => {
      // Arrange
      const token: Token = { type: 'lineEnding' } as Token
      let end: Place
      let start: Place

      // Setup
      start = { _bufferIndex: -1, _index: 1, column: 2, line: 1, offset: 1 }
      end = { _bufferIndex: -1, _index: 2, column: 1, line: 2, offset: 3 }
      token.start = { ...start }
      token.end = { ...end }

      // Act
      testSubject(vi.fn(() => [codes.lineFeed]).mockName('sliceStream'), token)

      // Expect
      expect(token.start).to.eql(start)
      expect(token.end).to.eql(end)
      expect(token).toMatchSnapshot()
    })
  })
})
