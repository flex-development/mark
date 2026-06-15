/**
 * @file Interfaces - CompileData
 * @module fsm/compile/interfaces/CompileData
 */

/**
 * Registry of tracked data.
 *
 * This interface can be augmented to register custom data.
 *
 * @example
 *  declare module '@flex-development/fsm/compile' {
 *    interface CompileData {
 *      flowCodeInside?: boolean | null | undefined
 *    }
 *  }
 */
interface CompileData {}

export type { CompileData as default }
