/**
 * @file Extensions - comments
 * @module examples/jack/compile/extensions/comments
 */

import { tt } from '@flex-development/jack/symbol'
import type {
  Buffer,
  Closer,
  CompileContext,
  Extension,
  Node,
  Opener
} from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'
import { ok } from 'devlop'
import {
  comment,
  commentCloser,
  commentLinePrefix,
  commentMarker,
  commentOpener,
  commentPadding
} from '../creators.mts'
import markdown from './markdown.mts'

export default comments

/**
 * Create the comments AST extension.
 *
 * @this {void}
 *
 * @param {Opener} opener
 *  Create an `enter` event handler
 * @param {Closer} closer
 *  Create an `exit` event handler
 * @param {Buffer} buffer
 *  Start capturing output into a `fragment`
 * @return {[Extension, Extension]}
 *  The extension list
 */
function comments(
  this: void,
  opener: Opener,
  closer: Closer,
  buffer: Buffer
): [Extension, Extension] {
  return [
    markdown(opener, closer, buffer),
    {
      enter: {
        [tt.comment]: opener(comment, entercomment),
        [tt.commentCloser]: opener(commentCloser),
        [tt.commentLinePrefix]: opener(commentLinePrefix),
        [tt.commentMarker]: opener(commentMarker, entercommentmarker),
        [tt.commentOpener]: opener(commentOpener),
        [tt.commentPadding]: opener(commentPadding)
      },
      exit: {
        [tt.comment]: closer(exitcomment),
        [tt.commentCloser]: closer(),
        [tt.commentLinePrefix]: closer(),
        [tt.commentMarker]: closer(),
        [tt.commentOpener]: closer(),
        [tt.commentPadding]: closer()
      }
    }
  ]
}

/**
 * Enter a comment.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function entercomment(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.comment, 'expected `comment` token')
  this.data.comment = true
  return void token
}

/**
 * Enter a comment marker.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function entercommentmarker(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.commentMarker, 'expected `commentMarker` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `commentMarker` node')

  // serialize the marker.
  tail.value = this.sliceSerialize(token)

  return void token
}

/**
 * Exit a comment.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function exitcomment(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.comment, 'expected `comment` token')
  delete this.data.comment
  return void token
}
