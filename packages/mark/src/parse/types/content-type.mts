/**
 * @file Type Aliases - ContentType
 * @module mark/parse/types/ContentType
 */

import type { ContentTypeMap } from '@flex-development/mark/parse'

/**
 * Union of registered content types.\
 * Content types are used on tokens to define their subcontent type.
 *
 * To register custom content types, augment {@linkcode ContentTypeMap}.
 * They will be added to this union automatically.
 */
type ContentType = ContentTypeMap[keyof ContentTypeMap]

export type { ContentType as default }
