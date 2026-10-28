/**
 * @file create
 * @module mark-compiler/ast/create
 */

import point from '#internal/point'
import positionTree from '#internal/position-tree'
import type { Options } from '@flex-development/mark-compiler/ast'
import compiler from '@flex-development/mark-compiler/compile'
import type {
  CompileContext,
  Context,
  Node,
  Tree
} from '@flex-development/mark/ast'
import type { IfNever } from '@flex-development/mark/core'
import type { Event, Position, Token } from '@flex-development/mark/parse'
import { u } from '@flex-development/unist-util-builder'
import { ok } from 'devlop'

export default create

/**
 * Create an event compiler.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Context}
 * @see {@linkcode IfNever}
 * @see {@linkcode Options}
 *
 * @this {void}
 *
 * @param {Options | null | undefined} [options]
 *  Options for creating the compiler
 * @return {IfNever<Context, CompileContext, Context>}
 *  The event compilation context
 */
function create(
  this: void,
  options?: Options | null | undefined
): IfNever<Context, CompileContext, Context> {
  return compiler({
    ...options,
    buffer,
    enter,
    exit,
    // @ts-expect-error(2322): `options` parameters do not match.
    // `Options` from `/ast` does not extend `Options` from `/compile`.
    finalizeContext: options?.finalizeContext,
    initialize,
    postprocess,
    serializeValue: options?.serializeNode
  })

  /**
   * Start capturing output into a temporary node.
   *
   * @this {CompileContext}
   *
   * @return {undefined}
   */
  function buffer(this: CompileContext): undefined {
    return void this.stack.push(u('fragment', []))
  }

  /**
   * Enter a node.
   *
   * @this {CompileContext}
   *
   * @param {Node} node
   *  The node to enter
   * @param {Token} token
   *  The corresponding token
   * @return {undefined}
   */
  function enter(this: CompileContext, node: Node, token: Token): undefined {
    /**
     * The last node on the stack.
     *
     * @const {Node | undefined} parent
     */
    const parent: Node | undefined = this.stack.at(-1)

    ok(parent, 'expected `parent`')
    ok('children' in parent, 'expected parent node')

    parent.children.push(node)
    node.position = { start: point(token.start) } as Position

    return void node
  }

  /**
   * Exit a node.
   *
   * @this {CompileContext}
   *
   * @param {Node} node
   *  The exited node
   * @param {Token} token
   *  The corresponding token
   * @return {undefined}
   * @throws {Error}
   *  If the token stack is empty
   */
  function exit(this: CompileContext, node: Node, token: Token): undefined {
    ok(node.type !== 'fragment', 'unexpected fragment `exit`ed')
    ok(node.position, 'expected `node.position` to be defined')
    node.position.end = point(token.end)
    return void token
  }

  /**
   * Create the initial syntax tree.
   *
   * @this {CompileContext}
   *
   * @return {Tree}
   *  The initial syntax tree
   */
  function initialize(this: CompileContext): Tree {
    return u('root', {
      children: [],
      position: { end: point(this.from), start: point(this.from) }
    })
  }

  /**
   * Handle the `tree` before transforms are applied.
   *
   * @this {CompileContext}
   *
   * @param {Tree} tree
   *  The syntax tree
   * @param {Event[]} events
   *  The list of events
   * @return {undefined}
   */
  function postprocess(
    this: CompileContext,
    tree: Tree,
    events: Event[]
  ): undefined {
    positionTree(tree, events)
    return void options?.postprocess?.call(this, tree, events)
  }
}
