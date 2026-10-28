/**
 * @file Type Aliases - FragmentChild
 * @module mark/ast/types/FragmentChild
 */

import type { Fragment, FragmentChildMap } from '@flex-development/mark/ast'

/**
 * Union of registered {@linkcode Fragment} child nodes.
 *
 * To register custom child nodes, augment {@linkcode FragmentChildMap}.\
 * They will be added to this union automatically.
 */
type FragmentChild = FragmentChildMap[keyof FragmentChildMap]

export type { FragmentChild as default }
