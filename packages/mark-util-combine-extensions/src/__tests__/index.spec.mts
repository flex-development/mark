/**
 * @file Unit Tests - combineExtensions
 * @module mark-util-combine-extensions/tests/unit/api
 */

import consumeThenFail from '#fixtures/consume-then-fail'
import consumeThenSucc from '#fixtures/consume-then-succ'
import eventsThenSucc from '#fixtures/events-then-succ'
import { codes } from '@flex-development/mark-util-symbol'
import type { List } from '@flex-development/mark/core'
import type { Extension } from '@flex-development/mark/parse'
import { describe, expect, it } from 'vitest'
import testSubject from '../index.mts'

describe('unit:mark-util-combine-extensions', () => {
  type Combinable = Extension | List<Extension> | null | undefined

  it.each<[extension: Combinable, ...sources: Combinable[]]>([
    [null],
    [{}, undefined],
    [{ disable: { null: [] } }, { disable: null, settings: {} }],
    [
      {
        disable: { null: ['eoc'] },
        settings: {}
      },
      {
        disable: { null: ['fail'] },
        settings: { sass: { indented: true } }
      }
    ],
    [
      {
        document: { [codes.lowercaseA]: consumeThenSucc }
      },
      {
        document: { [codes.lowercaseA]: null }
      }
    ],
    [
      {
        document: { [codes.lowercaseB]: eventsThenSucc }
      },
      {
        document: { [codes.lowercaseB]: consumeThenSucc }
      }
    ],
    [
      {
        document: { [codes.lowercaseC]: consumeThenSucc }
      },
      {
        document: {
          [codes.lowercaseC]: [
            eventsThenSucc,
            Object.assign({}, consumeThenFail, { add: 'after' })
          ]
        }
      }
    ]
  ])('should return combined extension (%#)', (extension, ...sources) => {
    expect(testSubject(extension, ...sources)).toMatchSnapshot()
  })
})
