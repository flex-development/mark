/**
 * @file Interfaces - FragmentChildMap
 * @module mark/ast/interfaces/FragmentChildMap
 */

import type { Fragment } from '@flex-development/mark/ast'

/**
 * Registry of {@linkcode Fragment} child nodes.
 *
 * This interface can be augmented to register custom child nodes.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface FragmentChildMap {
 *      mdast: mdast.PhrasingContent
 *    }
 *  }
 */
interface FragmentChildMap {}

export type { FragmentChildMap as default }
