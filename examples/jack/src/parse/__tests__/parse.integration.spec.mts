/**
 * @file Integration Tests - parse
 * @module examples/jack/parse/tests/integration/parse
 */

import snapshot from '#tests/utils/snapshot-events'
import { parse, postprocess } from '@flex-development/jack/parse'
import { tt } from '@flex-development/jack/symbol'
import { preprocess } from '@flex-development/mark-parser'
import { ev } from '@flex-development/mark-util-symbol'
import type { Chunk, FileLike } from '@flex-development/mark/parse'
import pathe from '@flex-development/pathe'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('integration:parse', () => {
  type Case = [path: string, ...Parameters<typeof parse>]

  let directory: string

  beforeAll(() => {
    directory = 'examples/jack/__fixtures__'
  })

  it('should handle no content', () => {
    // Arrange
    const file: FileLike = read(pathe.join(directory, 'files/empty.json5'))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse().source().write(slice))

    // Expect
    expect(result).to.have.property('length', 2)
    expect(result).to.each.have.nested.property('1.start')
    expect(result).to.each.have.nested.property('1.end')
    expect(result).to.each.have.nested.property('1.type', tt.eoc)
  })

  describe('comments', () => {
    it.each<Case>([
      ['01.json5'],
      ['02.json5'],
      ['03.json5'],
      ['04.json5']
    ])('should parse comments (%j)', path => {
      void test('comments/' + path)
    })
  })

  describe('expressions', () => {
    describe('array', () => {
      it.each<Case>([
        ['flat/01.json5'],
        ['flat/02.json5'],
        ['flat/03.json5'],
        ['flat/04.json5'],
        ['flat/05.json5'],
        ['flat/06.json5'],
        ['flat/07.json5'],
        ['flat/08.json5'],
        ['flat/09.json5'],
        ['nested/01.json5'],
        ['nested/02.json5'],
        ['nested/03.json5'],
        ['nested/04.json5'],
        ['nested/05.json5'],
        ['nested/06.json5'],
        ['nested/07.json5'],
        ['nested/08.json5'],
        ['nested/09.json5'],
        ['nested/10.json5']
      ])('should parse array expressions (%j)', path => {
        void test('expressions/array/' + path)
      })

      it.each<Case>([
        ['01.txt'],
        ['02.txt'],
        ['03.txt'],
        ['04.txt'],
        ['05.txt'],
        ['06.txt'],
        ['07.txt'],
        ['08.txt']
      ])('should parse malformed array expressions (%j)', path => {
        void test('expressions/array/malformed/' + path)
      })
    })

    describe('boolean', () => {
      it.each<Case>([
        ['01.json5'],
        ['02.json5']
      ])('should parse boolean expressions (%j)', path => {
        void test('expressions/boolean/' + path)
      })
    })

    describe('null', () => {
      it.each<Case>([
        ['01.json5']
      ])('should parse null expressions (%j)', path => {
        void test('expressions/null/' + path)
      })
    })

    describe('number', () => {
      it.each<Case>([
        ['exponential/01.json5'],
        ['exponential/02.json5'],
        ['exponential/03.json5'],
        ['exponential/04.json5'],
        ['exponential/05.json5'],
        ['exponential/06.json5'],
        ['exponential/07.json5'],
        ['exponential/08.json5'],
        ['exponential/09.json5'],
        ['exponential/10.json5'],
        ['exponential/11.json5'],
        ['exponential/12.json5'],
        ['exponential/13.json5'],
        ['exponential/14.json5'],
        ['float/01.json5'],
        ['float/02.json5'],
        ['float/03.json5'],
        ['float/04.json5'],
        ['float/05.json5'],
        ['float/06.json5'],
        ['float/07.json5'],
        ['float/08.json5'],
        ['float/09.json5'],
        ['float/10.json5'],
        ['float/11.json5'],
        ['float/12.json5'],
        ['float/13.json5'],
        ['float/14.json5'],
        ['float/15.json5'],
        ['hexadecimal/01.json5'],
        ['hexadecimal/02.json5'],
        ['hexadecimal/03.json5'],
        ['hexadecimal/04.json5'],
        ['hexadecimal/05.json5'],
        ['hexadecimal/06.json5'],
        ['infinity/01.json5'],
        ['infinity/02.json5'],
        ['infinity/03.json5'],
        ['integer/01.json5'],
        ['integer/02.json5'],
        ['integer/03.json5'],
        ['integer/04.json5'],
        ['integer/05.json5'],
        ['integer/06.json5'],
        ['integer/07.json5'],
        ['integer/08.json5'],
        ['integer/09.json5'],
        ['integer/10.json5'],
        ['nan/01.json5'],
        ['nan/02.json5'],
        ['nan/03.json5']
      ])('should parse number expressions (%j)', path => {
        void test('expressions/number/' + path)
      })

      it.each<Case>([
        ['01.txt'],
        ['02.txt'],
        ['03.txt'],
        ['04.txt'],
        ['05.txt'],
        ['06.txt'],
        ['07.txt'],
        ['08.txt'],
        ['09.txt'],
        ['10.txt'],
        ['11.txt'],
        ['12.txt'],
        ['13.txt']
      ])('should parse malformed number expressions (%j)', path => {
        void test('expressions/number/malformed/' + path)
      })
    })

    describe('object', () => {
      it.each<Case>([
        ['flat/01.json5'],
        ['flat/02.json5'],
        ['flat/03.json5'],
        ['flat/04.json5'],
        ['flat/05.json5'],
        ['flat/06.json5'],
        ['flat/07.json5'],
        ['nested/01.json5'],
        ['nested/02.json5'],
        ['nested/03.json5']
      ])('should parse object expressions (%j)', path => {
        void test('expressions/object/' + path)
      })

      it.each<Case>([
        ['01.txt'],
        ['02.txt'],
        ['03.txt'],
        ['04.txt'],
        ['05.txt'],
        ['06.txt'],
        ['07.txt'],
        ['08.txt'],
        ['09.txt'],
        ['10.txt'],
        ['11.txt']
      ])('should parse malformed object expressions (%j)', path => {
        void test('expressions/object/malformed/' + path)
      })
    })

    describe('string', () => {
      it.each<Case>([
        ['01.json5'],
        ['02.json5'],
        ['03.json5'],
        ['04.json5'],
        ['05.json5'],
        ['06.json5'],
        ['07.json5'],
        ['08.json5'],
        ['09.json5'],
        ['10.json5'],
        ['11.json5'],
        ['12.json5'],
        ['13.json5'],
        ['14.json5']
      ])('should parse string expressions (%j)', path => {
        void test('expressions/string/' + path)
      })

      it.each<Case>([
        ['01.txt'],
        ['02.txt'],
        ['03.txt'],
        ['04.txt'],
        ['05.txt'],
        ['06.txt'],
        ['07.txt'],
        ['08.txt']
      ])('should parse malformed string expressions (%j)', path => {
        void test('expressions/string/malformed/' + path)
      })
    })
  })

  describe('files', () => {
    it.each<Case>([
      ['01.json5'],
      ['02.json5']
    ])('should parse files (%j)', path => {
      void test('files/' + path)
    })

    it.each<Case>([
      ['01.txt'],
      ['02.txt'],
      ['03.txt'],
      ['04.txt'],
      ['05.txt']
    ])('should parse files with malformed content (%j)', path => {
      void test('files/malformed/' + path)
    })
  })

  /**
   * @this {void}
   *
   * @param {string} path
   *  The path to the fixture file
   * @return {void}
   */
  function test(this: void, path: string): undefined {
    // Arrange
    const file: FileLike = read(pathe.join(directory, path))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse().source().write(slice))
    const beforeLast = result.at(-2)
    const last = result.at(-1)

    // Expect
    expect(result).to.have.property('length').be.at.least(2)
    expect(result).to.each.have.nested.property('1.start')
    expect(result).to.each.have.nested.property('1.end')
    expect(beforeLast).to.be.an('array')
    expect(beforeLast).to.have.property('0', ev.enter)
    expect(beforeLast).to.have.nested.property('1.type', tt.eoc)
    expect(last).to.be.an('array').but.not.eq(beforeLast)
    expect(last).to.have.property('0', ev.exit)
    expect(last).to.have.property('1', beforeLast![1])
    expect(snapshot(result)).toMatchSnapshot()

    return void path
  }
})
