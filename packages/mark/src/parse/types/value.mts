/**
 * @file Type Aliases - Value
 * @module mark/parse/types/Value
 */

/**
 * The contents of a file.
 *
 * Can either be text, or a {@linkcode Uint8Array} like structure.
 */
type Value = Uint8Array | string

export type { Value as default }
