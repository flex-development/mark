/**
 * @file Type Aliases - ConstructPosition
 * @module fsm/parse/types/ConstructPosition
 */

import type { ConstructPositionMap } from '@flex-development/fsm/parse'

/**
 * Union of construct positions.
 *
 * To register custom content types, augment {@linkcode ConstructPositionMap}.
 * They will be added to this union automatically.
 */
type ConstructPosition = ConstructPositionMap[keyof ConstructPositionMap]

export type { ConstructPosition as default }
