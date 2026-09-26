/**
 * @file Interfaces - Settings
 * @module mark/parse/interfaces/Settings
 */

/**
 * Additional extension settings.
 *
 * This interface can be augmented to register custom settings.
 *
 * @example
 *  declare module '@flex-development/docmark-util-types' {
 *    interface Settings {
 *      mode?: string | null | undefined
 *    }
 *  }
 */
interface Settings {}

export type { Settings as default }
