/**
 * @file Type Aliases - ConstructName
 * @module mark/parse/types/ConstructName
 */

import type { IfNever } from '@flex-development/mark/core'
import type { ConstructNameMap } from '@flex-development/mark/parse'

/**
 * Union of registered construct names.
 *
 * To register custom contexts, augment {@linkcode ConstructNameMap}.\
 * They will be added to this union automatically.
 */
type ConstructName = IfNever<
  keyof ConstructNameMap,
  string,
  ConstructNameMap[keyof ConstructNameMap]
>

export type { ConstructName as default }
