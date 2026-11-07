/**
 * @file Integration Tests - literal
 * @module examples/splat/parse/initialize/tests/integration/literal
 */

import snapshot from '#tests/utils/snapshot-events'
import { preprocess } from '@flex-development/mark-parser'
import { ev } from '@flex-development/mark-util-symbol'
import type { Chunk, FileLike } from '@flex-development/mark/parse'
import pathe from '@flex-development/pathe'
import { parse } from '@flex-development/splat/parse'
import { tt } from '@flex-development/splat/symbol'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('integration:parse/initialize/literal', () => {
  let directory: string

  beforeAll(() => {
    directory = 'examples/splat/__fixtures__/content/literal'
  })

  it('should handle empty content', () => {
    // Arrange
    const file: FileLike = read(pathe.join(directory, '../empty.txt'))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = parse().literal().write(slice)

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
    ['09.txt'],
    ['10.txt'],
    ['11.txt'],
    ['12.txt'],
    ['13.txt'],
    ['14.txt']
  ])('should parse literals (%j)', (path, options) => {
    // Arrange
    const file: FileLike = read(pathe.join(directory, path))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = parse(options).literal().write(slice)
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
  })
})
