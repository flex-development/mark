/**
 * @file Type Aliases - CompileResult
 * @module mark/compile/types/CompileResult
 */

import type { Compile, CompileResultMap } from '@flex-development/mark/compile'

/**
 * Union of registered event compilation results.
 *
 * Compilation results are the values returned from {@linkcode Compile}.
 *
 * To register custom results, augment {@linkcode CompileResultMap}.\
 * They will be added to this union automatically.
 */
type CompileResult = CompileResultMap[keyof CompileResultMap]

export type { CompileResult as default }
