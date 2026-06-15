/**
 * @file Type Aliases - SerializeValue
 * @module fsm/compile/types/SerializeValue
 */

import type { CompileValue, Resume } from '@flex-development/fsm/compile'

/**
 * Serialize a compilation value.
 *
 * > 👉 **Note**: Typically used by {@linkcode Resume} to transform buffered
 * > values into captured output.
 *
 * @see {@linkcode CompileValue}
 *
 * @this {void}
 *
 * @param {CompileValue | undefined} value
 *  The value to serialize
 * @return {string | null | undefined}
 *  The serialized value
 */
type SerializeValue = (
  this: void,
  value: CompileValue | undefined
) => string | null | undefined

export type { SerializeValue as default }
