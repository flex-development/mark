/**
 * @file Interfaces - PreprocessOptions
 * @module mark/parse/interfaces/PreprocessOptions
 */

/**
 * Options for configuring a preprocessor.
 */
interface PreprocessOptions {
  /**
   * Whether to preserve decoded empty string chunks.
   */
  allowEmptyChunk?: boolean | null | undefined

  /**
   * Whether to ignore byte order marks (BOMs).
   */
  ignoreBOM?: boolean | null | undefined

  /**
   * Whether the `nul` character should be kept or replaced.
   *
   * - `false`: substitute `codes.nul` with `codes.replacementCharacter`
   * - `true` / `null` / `undefined`: `codes.nul` will **not** be replaced
   */
  nul?: boolean | null | undefined

  /**
   * The number of columns represented by a horizontal tab.
   *
   * @default constants.tabSize
   */
  tabSize?: number | null | undefined
}

export type { PreprocessOptions as default }
