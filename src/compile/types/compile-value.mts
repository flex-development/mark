/**
 * @file Type Aliases - CompileValue
 * @module fsm/compile/types/CompileValue
 */

import type { CompileValueMap } from '@flex-development/fsm/compile'

/**
 * Union of registered event compilation values.
 *
 * Compilation values are intermediate values
 * entered and exited during compilation.
 *
 * To register custom values, augment {@linkcode CompileValueMap}.
 * They will be added to this union automatically.
 */
type CompileValue = CompileValueMap[keyof CompileValueMap]

export type { CompileValue as default }
