/**
 * @file Type Tests - Writable
 * @module fsm/parse/types/tests/unit-d/Writable
 */
import type {
  Chunk,
  FileLike,
  List,
  Value
} from '@flex-development/fsm/parse'
import type TestSubject from '../writable.mts'

describe('unit-d:types/Writable', () => {
  it('should extract Chunk', () => {
    expectTypeOf<TestSubject>().extract<FileLike>().not.toBeNever()
  })

  it('should extract FileLike', () => {
    expectTypeOf<TestSubject>().extract<Chunk>().not.toBeNever()
  })

  it('should extract List<Chunk | FileLike | Value>', () => {
    // Arrange
    type Expect = List<Chunk | FileLike | Value>

    // Expect
    expectTypeOf<TestSubject>().extract<Expect>().not.toBeNever()
  })

  it('should extract Value', () => {
    expectTypeOf<TestSubject>().extract<Value>().not.toBeNever()
  })
})
