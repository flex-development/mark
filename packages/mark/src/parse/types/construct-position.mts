/**
 * @file Type Aliases - ConstructPosition
 * @module mark/parse/types/ConstructPosition
 */

import type { ConstructPositionMap } from '@flex-development/mark/parse'

/**
 * Union of construct positions.
 *
 * To register custom positions, augment {@linkcode ConstructPositionMap}.
 * They will be added to this union automatically.
 */
type ConstructPosition = ConstructPositionMap[keyof ConstructPositionMap]

export type { ConstructPosition as default }
