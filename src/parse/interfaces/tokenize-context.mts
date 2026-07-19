/**
 * @file Interfaces - TokenizeContext
 * @module mark/parse/interfaces/TokenizeContext
 */

import type {
  Code,
  Construct,
  ContainerState,
  ContentType,
  CreateToken,
  DefineSkip,
  Event,
  Now,
  ParseContext,
  SerializeChunks,
  SliceSerialize,
  SliceStream,
  State,
  Write
} from '@flex-development/mark/parse'

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
   * The current character code.
   *
   * @see {@linkcode Code}
   */
  code: Code

  /**
   * Shared state set when parsing containers.
   *
   * Containers are typically parsed in separate phases:
   * their first line (`tokenize`), continued lines (`continuation.tokenize`),
   * and finally `exit`.
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
   * Whether a construct is interrupting another construct.
   */
  interrupt?: boolean | null | undefined

  /**
   * Whether empty tokens are allowed.
   */
  noEmptyTokens?: boolean | null | undefined

  /**
   * When trying a construct, whether {@linkcode Construct.previous}
   * should **not** be called.
   *
   * If `false`, `previous` should be called via {@linkcode State} function.
   */
  noPrevious?: boolean | null | undefined

  /**
   * Get the current point in the file.
   *
   * @see {@linkcode Now}
   */
  now: Now

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
   * Get the string value of a slice of chunks.
   *
   * @see {@linkcode SerializeChunks}
   */
  serializeChunks: SerializeChunks

  /**
   * Get the text spanning the specified range.
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
   * The eof code (`null`) can be used to signal the end of the stream.
   *
   * @see {@linkcode Write}
   */
  write: Write
}

export type { TokenizeContext as default }
