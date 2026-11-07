/**
 * @file Type Aliases - InitialContent
 * @module mark/parse/types/InitialContent
 */

import type {
  ContentType,
  ContentTypeMap,
  InitialConstruct
} from '@flex-development/mark/parse'

/**
 * Map, where each key is a content type and each value is an initial construct.
 *
 * To register custom content types, augment {@linkcode ContentTypeMap}.
 * They will be added to this map automatically.
 */
type InitialContent = { [K in ContentType]: InitialConstruct }

export type { InitialContent as default }
