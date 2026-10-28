/**
 * @file Type Aliases - NormalizedExtension
 * @module mark/parse/types/NormalizedExtension
 */

import type { Extension } from '@flex-development/mark/parse'

/**
 * A filtered, combined extension, where all properties of {@linkcode Extension}
 * are optional, but defined.
 */
type NormalizedExtension = {
  [Key in keyof Extension]: Exclude<Extension[Key], null | undefined>
}

export type { NormalizedExtension as default }
