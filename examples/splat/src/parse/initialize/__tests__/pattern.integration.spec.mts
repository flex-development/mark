/**
 * @file Integration Tests - pattern
 * @module examples/splat/parse/initialize/tests/integration/pattern
 */

import snapshot from '#tests/utils/snapshot-events'
import { preprocess } from '@flex-development/mark-parser'
import { ev } from '@flex-development/mark-util-symbol'
import type { Chunk, FileLike } from '@flex-development/mark/parse'
import pathe from '@flex-development/pathe'
import { parse, type Options } from '@flex-development/splat/parse'
import { tt } from '@flex-development/splat/symbol'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('integration:parse/initialize/pattern', () => {
  let directory: string

  beforeAll(() => {
    directory = 'examples/splat/__fixtures__/content/pattern'
  })

  it('should handle empty content', () => {
    // Arrange
    const file: FileLike = read(pathe.join(directory, '../empty.txt'))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = parse().pattern().write(slice)

    // Expect
    expect(result).to.have.property('length', 2)
    expect(result).to.each.have.nested.property('1.start')
    expect(result).to.each.have.nested.property('1.end')
    expect(result).to.each.have.nested.property('1.type', tt.eoc)
  })

  it.each<[path: string, ...Parameters<typeof parse>]>([
    ['01.txt'],
    ['02.txt'],
    ['03.txt'],
    ['04.txt'],
    ['05.txt'],
    ['06.txt'],
    ['07.txt'],
    ['08.txt'],
    ['09.txt']
  ])('should handle malformed content (%j)', (path, options) => {
    void test('malformed/' + path, options)
  })

  it.each<[path: string, ...Parameters<typeof parse>]>([
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
    ['13.txt'],
    ['14.txt'],
    ['15.txt'],
    ['16.txt'],
    ['17.txt'],
    ['18.txt'],
    ['19.txt'],
    ['20.txt'],
    ['21.txt'],
    ['22.txt'],
    ['23.txt'],
    ['24.txt'],
    ['25.txt'],
    ['26.txt'],
    ['27.txt'],
    ['28.txt'],
    ['29.txt'],
    ['30.txt']
  ])('should parse input pattern (%j)', (path, options) => {
    void test(path, options)
  })

  describe('segments', () => {
    it.each<[path: string, ...Parameters<typeof parse>]>([
      ['basic/01.txt'],
      ['basic/02.txt'],
      ['basic/03.txt'],
      ['basic/04.txt'],
      ['basic/05.txt'],
      ['basic/06.txt'],
      ['basic/07.txt'],
      ['basic/08.txt'],
      ['basic/09.txt'],
      ['basic/10.txt'],
      ['basic/11.txt'],
      ['escapes/01.txt'],
      ['escapes/02.txt'],
      ['escapes/03.txt'],
      ['escapes/04.txt'],
      ['character-class/alnum.txt'],
      ['character-class/alpha.txt'],
      ['character-class/ascii.txt'],
      ['character-class/blank.txt'],
      ['character-class/cntrl.txt'],
      ['character-class/custom.txt'],
      ['character-class/digit.txt'],
      ['character-class/graph.txt'],
      ['character-class/lower.txt'],
      ['character-class/print.txt'],
      ['character-class/punct.txt'],
      ['character-class/space.txt'],
      ['character-class/upper.txt'],
      ['character-class/word.txt'],
      ['character-class/xdigit.txt'],
      ['collating-symbol/01.txt'],
      ['collating-symbol/02.txt'],
      ['collating-symbol/03.txt'],
      ['collating-symbol/04.txt'],
      ['equivalence-class/01.txt'],
      ['equivalence-class/02.txt'],
      ['equivalence-class/03.txt'],
      ['equivalence-class/04.txt'],
      ['ranges/01.txt'],
      ['ranges/02.txt'],
      ['ranges/03.txt'],
      ['ranges/04.txt'],
      ['ranges/05.txt']
    ])('should parse bracket expressions (%j)', (path, options) => {
      void test('segment/bracket-expression/' + path, options)
    })

    it.each<[path: string, ...Parameters<typeof parse>]>([
      ['01.txt'],
      ['02.txt'],
      ['03.txt']
    ])('should parse empty segments (%j)', (path, options) => {
      void test('segment/empty/' + path, options)
    })

    it.each<[path: string, ...Parameters<typeof parse>]>([
      ['01.txt'],
      ['02.txt'],
      ['03.txt']
    ])('should parse globstars (%j)', (path, options) => {
      void test('segment/globstar/' + path, options)
    })

    it.each<[path: string, ...Parameters<typeof parse>]>([
      ['01.txt'],
      ['02.txt'],
      ['03.txt']
    ])('should parse literals (%j)', (path, options) => {
      void test('segment/literal/' + path, options)
    })

    it.each<[path: string, ...Parameters<typeof parse>]>([
      ['01.txt'],
      ['02.txt'],
      ['03.txt'],
      ['04.txt'],
      ['05.txt'],
      ['06.txt'],
      ['07.txt'],
      ['08.txt']
    ])('should parse wildcards (asterisk) (%j)', (path, options) => {
      void test('segment/wildcard/asterisk/' + path, options)
    })

    it.each<[path: string, ...Parameters<typeof parse>]>([
      ['01.txt'],
      ['02.txt'],
      ['03.txt'],
      ['04.txt']
    ])('should parse wildcards (questionMark) (%j)', (path, options) => {
      void test('segment/wildcard/question-mark/' + path, options)
    })
  })

  /**
   * @this {void}
   *
   * @param {string} path
   *  The relative path to the fixture file
   * @param {Options | null | undefined} [options]
   *  The parse options
   * @return {undefined}
   */
  function test(
    this: void,
    path: string,
    options?: Options | null | undefined
  ): undefined {
    // Arrange
    const file: FileLike = read(pathe.join(directory, path))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = parse(options).pattern().write(slice)
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
