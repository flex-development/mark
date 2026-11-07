/**
 * @file Interfaces - TokenizeContext
 * @module mark/parse/interfaces/TokenizeContext
 */

import type {
  Check,
  Code,
  Construct,
  ContainerState,
  ContentType,
  CreateToken,
  DefineSkip,
  Event,
  Hooks,
  Now,
  ParseContext,
  SerializeChunks,
  SliceSerialize,
  SliceStream,
  State,
  Write
} from '@flex-development/mark/parse'
import type { Debugger } from 'debug'

/**
 * Context object to assist with parsing.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface TokenizeContext {
 *      globstar?: boolean | null | undefined
 *    }
 *  }
 */
interface TokenizeContext {
  /**
   * Whether a speculative {@linkcode Check} is being ran.
   */
  check?: boolean | null | undefined

  /**
   * The current character code.
   *
   * @see {@linkcode Code}
   */
  code: Code

  /**
   * Shared state set when parsing containers.
   *
   * Containers are typically parsed in separate phases:\
   * first line (`tokenize`), continued lines (`continuation`),
   * and finally `exit`.\
   * This record can be used to store information between these hooks.
   *
   * @see {@linkcode ContainerState}
   */
  containerState?: ContainerState | null | undefined

  /**
   * The content type the tokenizer deals with.
   *
   * @see {@linkcode ContentType}
   */
  contentType?: ContentType | null | undefined

  /**
   * The current construct.
   *
   * Constructs that are not `partial` are set here.
   *
   * @see {@linkcode Construct}
   */
  currentConstruct?: Construct | null | undefined

  /**
   * The debug logger.
   *
   * @see {@linkcode Debugger}
   */
  debug: Debugger

  /**
   * Define a skip.
   *
   * @see {@linkcode DefineSkip}
   */
  defineSkip: DefineSkip

  /**
   * The current list of events.
   *
   * @see {@linkcode Event}
   */
  events: Event[]

  /**
   * The record of lifecycle hooks.
   *
   * @see {@linkcode Hooks}
   */
  hooks: Hooks

  /**
   * Whether a construct is interrupting.
   *
   * For example, in markdown:
   *
   * ```markdown
   * a
   * # b
   * ```
   *
   * At `2:1` there is an interruption.
   */
  interrupt?: boolean | null | undefined

  /**
   * Whether the position of the tokenizer moves forward at stream breaks.
   */
  moveOnBreak?: boolean | null | undefined

  /**
   * Whether empty tokens are not allowed.
   */
  noEmptyTokens?: boolean | null | undefined

  /**
   * Whether {@linkcode Construct.previous} should **not** be called when trying
   * a construct.
   *
   * If `false`, `previous` should be called via {@linkcode State} function.
   */
  noPrevious?: boolean | null | undefined

  /**
   * Get the current place in the content.
   *
   * @see {@linkcode Now}
   */
  now: Now

  /**
   * The parent tokenizer.
   */
  parent?: TokenizeContext | null | undefined

  /**
   * The relevant parsing context.
   *
   * Tokenizers typically deal with one content type.
   * The parser is the object dealing with it all.
   *
   * @see {@linkcode ParseContext}
   */
  parser: ParseContext

  /**
   * The previous character code.
   *
   * @see {@linkcode Code}
   */
  previous: Code

  /**
   * Stringify a slice of chunks.
   *
   * @see {@linkcode SerializeChunks}
   */
  serializeChunks: SerializeChunks

  /**
   * Get the content spanning the specified range.
   *
   * @see {@linkcode SliceSerialize}
   */
  sliceSerialize: SliceSerialize

  /**
   * Get the chunks spanning the specified range.
   *
   * @see {@linkcode SliceStream}
   */
  sliceStream: SliceStream

  /**
   * The token factory.
   *
   * @see {@linkcode CreateToken}
   */
  token: CreateToken

  /**
   * Write a slice of chunks.
   *
   * The eos code (`null`) can be used to signal the end of the stream.
   *
   * @see {@linkcode Write}
   */
  write: Write
}

export type { TokenizeContext as default }
