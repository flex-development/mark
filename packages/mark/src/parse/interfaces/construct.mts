/**
 * @file Interfaces - Construct
 * @module mark/parse/interfaces/Construct
 */

import type {
  ConstructPosition,
  ConstructRecord,
  Exiter,
  Previous,
  Resolver,
  Tokenizer
} from '@flex-development/mark/parse'

/**
 * Object describing how to tokenize a syntax construct.
 */
interface Construct {
  /**
   * Whether the construct, when in a {@linkcode ConstructRecord}, takes
   * precedence over existing constructs for the same character code when
   * merged.
   *
   * @see {@linkcode ConstructPosition}
   */
  add?: ConstructPosition | null | undefined

  /**
   * Whether the construct cannot be interrupted by other constructs.
   *
   * For example, when parsing a markdown document (containers, such as block
   * quotes and lists) and this construct is parsing fenced code:
   *
   * ````markdown
   * > ```js
   * > - list?
   * ````
   *
   * …then `- list?` cannot form if this fenced code construct is concrete.
   *
   * An example of a construct that is not concrete is a GFM table:
   *
   * ````markdown
   * | a |
   * | - |
   * > | b |
   * ````
   *
   * …`b` is not part of the table.
   */
  concrete?: boolean | null | undefined

  /**
   * For containers, a continuation construct.
   *
   * Containers are typically parsed in separate phases:\
   * first line ({@linkcode tokenize}), continued lines (`continuation`),
   * and finally {@linkcode exit}.
   */
  continuation?: Construct | null | undefined

  /**
   * For containers, a final hook.
   *
   * Containers are typically parsed in separate phases:\
   * first line ({@linkcode tokenize}),
   * continued lines ({@linkcode continuation}), and finally `exit`.
   *
   * @see {@linkcode Exiter}
   */
  exit?: Exiter | null | undefined

  /**
   * The name of the construct.
   */
  name?: string | null | undefined

  /**
   * Whether the construct is partial.
   *
   * A partial construct can never be a `currentConstruct`.
   */
  partial?: boolean | null | undefined

  /**
   * Check if the previous character code can precede this construct.
   *
   * @see {@linkcode Previous}
   */
  previous?: Previous | null | undefined

  /**
   * Handle the events parsed by {@linkcode tokenize}.
   *
   * @see {@linkcode Resolver}
   */
  resolve?: Resolver | null | undefined

  /**
   * Handle all events when the content is complete, from the start to the end.
   *
   * > 👉 **Note**: Only called if {@linkcode tokenize} is successful at least
   * > once in the content.
   *
   * @see {@linkcode Resolver}
   */
  resolveAll?: Resolver | null | undefined

  /**
   * Handle events parsed from the start of content (which may include other
   * constructs) to the last one parsed by {@linkcode tokenize}.
   *
   * @see {@linkcode Resolver}
   */
  resolveTo?: Resolver | null | undefined

  /**
   * Set up a state machine to handle character codes streaming in.
   *
   * @see {@linkcode Tokenizer}
   */
  tokenize: Tokenizer
}

export type { Construct as default }
