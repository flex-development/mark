/**
 * @file Interfaces - Fragment
 * @module mark/ast/interfaces/Fragment
 */

import type { FragmentChild } from '@flex-development/mark/ast'
import type unist from 'unist'

/**
 * A temporary node.
 *
 * @see {@linkcode unist.Parent}
 *
 * @extends {unist.Parent}
 */
interface Fragment extends unist.Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode FragmentChild}
   *
   * @override
   */
  children: FragmentChild[]

  /**
   * The node type.
   */
  type: 'fragment'
}

export type { Fragment as default }
