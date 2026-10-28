/**
 * @file Interfaces - CompileData
 * @module mark/ast/interfaces/CompileData
 */

import type * as compile from '@flex-development/mark/compile'

/**
 * Registry of tracked data.
 *
 * This interface can be augmented to register custom data.
 *
 * @example
 *  declare module '@flex-development/mark/ast' {
 *    interface CompileData {
 *      flowCodeInside?: boolean | null | undefined
 *    }
 *  }
 *
 * @see {@linkcode compile.CompileData}
 *
 * @extends {compile.CompileData}
 */
interface CompileData extends compile.CompileData {}

export type { CompileData as default }
