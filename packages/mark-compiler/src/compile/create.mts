/**
 * @file create
 * @module mark-compiler/compile/create
 */

import error from '#internal/error'
import isList from '#internal/is-list'
import point from '#internal/point'
import type { Options } from '@flex-development/mark-compiler/compile'
import { chars, ev } from '@flex-development/mark-util-symbol'
import type {
  CompileContext,
  CompileResult,
  CompileValue,
  Context,
  CreateValue,
  Extension,
  Extensions,
  Handle,
  OnEnterError,
  OnExitError,
  StackedToken,
  TakeExtension,
  Transform
} from '@flex-development/mark/compile'
import type { IfNever, List } from '@flex-development/mark/core'
import type {
  Event,
  Position,
  SerializeOptions,
  Token,
  TokenType
} from '@flex-development/mark/parse'
import {
  stringifyPosition
} from '@flex-development/unist-util-stringify-position'
import { ok } from 'devlop'

export default create

/**
 * Create an event compiler.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Context}
 * @see {@linkcode IfNever}
 * @see {@linkcode Options}
 *
 * @this {void}
 *
 * @param {Options} options
 *  Options for creating the compiler
 * @return {IfNever<Context, CompileContext, Context>}
 *  The event compilation context
 */
function create(
  this: void,
  options: Options
): IfNever<Context, CompileContext, Context> {
  /**
   * The event compilation context.
   *
   * @const {CompileContext} context
   */
  const context: CompileContext = {
    buffer: options.buffer,
    compile,
    config: {
      afterEnter: [],
      afterExit: [],
      beforeEnter: [],
      beforeExit: [],
      enter: {},
      exit: {},
      transforms: []
    },
    data: {},
    enter,
    exit,
    from: point(options.from),
    resume,
    sliceSerialize,
    stack: [],
    tokenStack: []
  }

  return configure()

  /**
   * Create an exit handle.
   *
   * @template {TokenType} T
   *  The corresponding token type
   *
   * @this {void}
   *
   * @param {Handle<T> | null | undefined} [pre]
   *  The handle to run before exiting a value
   * @return {Handle<T>}
   *  The exit handle
   */
  function closer<T extends TokenType>(
    this: void,
    pre?: Handle<T> | null | undefined
  ): Handle<T>

  /**
   * Create an exit handle.
   *
   * @this {void}
   *
   * @param {Handle | null | undefined} [pre]
   *  The handle to run before exiting a value
   * @return {Handle}
   *  The exit handle
   */
  function closer(this: void, pre?: Handle | null | undefined): Handle {
    return close

    /**
     * @this {CompileContext}
     *
     * @param {Token} token
     *  The token to handle
     * @return {undefined}
     */
    function close(this: CompileContext, token: Token): undefined {
      return pre?.call(this, token), void exit.call(this, token)
    }
  }

  /**
   * Turn events into a compilation result.
   *
   * @this {void}
   *
   * @param {Event[] | null | undefined} events
   *  The list of events
   * @return {CompileResult}
   *  The compilation result
   */
  function compile(
    this: void,
    events?: Event[] | null | undefined
  ): CompileResult {
    events ??= []

    /**
     * The current index.
     *
     * @var {number} index
     */
    let index: number = -1

    /**
     * The compilation result.
     *
     * @var {CompileResult} result
     */
    let result: CompileResult = options.initialize.call(context, events)

    // push compilation result onto the stack.
    context.stack.push(result)

    // prepare to use `sliceSerialize` from tokenizers.
    if (context.sliceSerialize === sliceSerialize) {
      Reflect.deleteProperty(context, 'sliceSerialize')
    }

    // handle events before compilation.
    options.preprocess?.call(context, events, result)

    // call token handlers.
    while (++index < events.length) {
      ok(events[index], 'expected `events[index]`')
      const [event, token, { sliceSerialize }] = events[index]!

      // use serializer from tokenizer.
      context.sliceSerialize = sliceSerialize

      // call before hooks.
      if (event === ev.enter) {
        handles(context.config.beforeEnter, context, token)
      } else {
        handles(context.config.beforeExit, context, token)
      }

      // call the token handler.
      handle(context.config[event][token.type], context, token)

      // call after hooks.
      if (event === ev.exit) {
        handles(context.config.afterExit, context, token)
      } else {
        handles(context.config.afterEnter, context, token)
      }
    }

    // handle tokens still being open.
    if (context.tokenStack.length > 0) {
      const [token, handler] = context.tokenStack.at(-1)!
      error.call(context, undefined, token, handler)
    }

    // handle result after compilation.
    options.postprocess?.call(context, result, events)

    // apply transforms.
    return context.config.transforms.reduce((result, transform) => {
      return transform(result) ?? result
    }, result)
  }

  /**
   * Configure the compiler.
   *
   * @this {void}
   *
   * @return {CompileContext}
   *  The configured compiler
   */
  function configure(this: void): CompileContext {
    // finalize `context` before combining extensions
    // so finalized context is available to `options.takeExtension`.
    void options.finalizeContext?.(context, options)

    /**
     * The extension, or extensions, to merge.
     *
     * @var {Extensions} extensions
     */
    let extensions: Extensions = options.extensions ?? []

    // create extensions.
    if (typeof extensions === 'function') {
      extensions = extensions(opener, closer, context.buffer)
    }

    // normalize extensions.
    extensions = !isList(extensions) ? [extensions] : [...extensions]

    // combine extensions.
    void takeExtensions(extensions, options.takeExtension)

    return context
  }

  /**
   * Enter a compilation value.
   *
   * @this {CompileContext}
   *
   * @param {CompileValue} value
   *  The compilation value
   * @param {Token} token
   *  The token associated with `value`
   * @param {OnEnterError | null | undefined} [onError]
   *  Handle the case where another token is open, but closed by something else
   * @return {undefined}
   */
  function enter(
    this: CompileContext,
    value: CompileValue,
    token: Token,
    onError?: OnEnterError | null | undefined
  ): undefined {
    options.enter.call(context, value, token)
    this.stack.push(value)
    this.tokenStack.push([token, onError])
    return void value
  }

  /**
   * Exit a compilation value.
   *
   * @this {CompileContext}
   *
   * @param {Token} token
   *  The token associated with the compilation value
   * @param {OnExitError | null | undefined} [onError]
   *  Handle the case where another token is open
   * @return {undefined}
   * @throws {Error}
   *  If the token stack is empty
   */
  function exit(
    this: CompileContext,
    token: Token,
    onError?: OnExitError | null | undefined
  ): undefined {
    /**
     * The last stacked token.
     *
     * @const {StackedToken | undefined} stacked
     */
    const stacked: StackedToken | undefined = this.tokenStack.pop()

    // cannot close `token` if token stack is empty.
    if (!stacked) {
      /**
       * The reason for the exit error.
       *
       * @var {string} reason
       */
      let reason: string = 'Cannot close'

      // build full error message.
      reason += chars.space
      reason += chars.graveAccent + token.type + chars.graveAccent
      reason += chars.space + chars.leftParen
      reason += stringifyPosition([token.start, token.end])
      reason += chars.rightParen + chars.colon + chars.space + 'it\'s not open'

      throw new Error(reason, { cause: { open: stacked, token } })
    }

    // error on token type mismatch.
    if (stacked[0].type !== token.type) {
      error.call(this, token, stacked[0], stacked[1], onError)
    }

    ok(this.stack.length, 'expected at least `1` compile value on `stack`')
    return void options.exit.call(context, this.stack.pop()!, token)
  }

  /**
   * Call a token handler.
   *
   * @this {void}
   *
   * @param {Handle<any> | null | undefined} handle
   *  The handle to call
   * @param {CompileContext} context
   *  The event compilation context
   * @param {Token} token
   *  The current token
   * @return {undefined}
   */
  function handle(
    this: void,
    handle: Handle<any> | null | undefined,
    context: CompileContext,
    token: Token
  ): undefined {
    return void handle?.call(context, token)
  }

  /**
   * Call token handlers.
   *
   * @this {void}
   *
   * @param {ReadonlyArray<Handle>} handles
   *  The list of handles to call
   * @param {CompileContext} context
   *  The event compilation context
   * @param {Token} token
   *  The current token
   * @return {undefined}
   */
  function handles(
    this: void,
    handles: readonly Handle[],
    context: CompileContext,
    token: Token
  ): undefined {
    /**
     * The index of the current handle.
     *
     * @var {number} index
     */
    let index: number = -1

    // call handles in list order.
    while (++index < handles.length) {
      ok(handles[index], 'expected `handles[index]`')
      handle(handles[index], context, token)
    }

    return void handles
  }

  /**
   * Create an enter handle.
   *
   * @template {CompileValue} V
   *  The value to create and enter
   * @template {TokenType} T
   *  The event token type
   *
   * @this {void}
   *
   * @param {CreateValue<V, T>} value
   *  Create the value to enter
   * @param {Handle<T> | null | undefined} [and]
   *  An additional handle to run after entering the value
   * @return {Handle<T>}
   *  The `enter` event handler
   */
  function opener<V extends CompileValue, T extends TokenType>(
    this: void,
    value: CreateValue<V, T>,
    and?: Handle<T> | null | undefined
  ): Handle<T>

  /**
   * Create an enter handle.
   *
   * @this {void}
   *
   * @param {CreateValue} node
   *  Create the value to enter
   * @param {Handle | null | undefined} [and]
   *  An additional handle to run after entering the value
   * @return {Handle}
   *  The `enter` event handler
   */
  function opener(
    this: void,
    node: CreateValue,
    and?: Handle | null | undefined
  ): Handle {
    return open

    /**
     * @this {CompileContext}
     *
     * @param {Token} token
     *  The token to handle
     * @return {undefined}
     */
    function open(this: CompileContext, token: Token): undefined {
      return enter.call(this, node(token), token), void and?.call(this, token)
    }
  }

  /**
   * Stop capturing output and serialize the captured value.
   *
   * @see {@linkcode CompileContext}
   *
   * @this {CompileContext}
   *
   * @return {string | null | undefined}
   *  The serialized output
   */
  function resume(this: CompileContext): string | null | undefined {
    /**
     * The last value on the stack.
     *
     * @const {CompileValue | undefined} value
     */
    const value: CompileValue | undefined = this.stack.pop()

    // use custom serializer.
    if (options.serializeValue) return options.serializeValue(value)

    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return value === undefined ? value : String(value)
  }

  /**
   * Get the text spanning `range`.
   *
   * @this {void}
   *
   * @param {Position} range
   *  The position in stream
   * @param {SerializeOptions | boolean | null | undefined} [options]
   *  Options for serializing or whether to expand tabs
   * @return {string}
   *  The serialized slice
   */
  function sliceSerialize(
    this: void,
    range: Position,
    options?: SerializeOptions | boolean | null | undefined
  ): string {
    return void range, void options, chars.empty
  }

  /**
   * Merge extensions into the compiler configuration.
   *
   * @this {void}
   *
   * @param {ReadonlyArray<Extension | List<Extension>>} extensions
   *  The extensions to merge
   * @param {TakeExtension | null | undefined} [take]
   *  Merge additional extension fields into the compiler configuration
   * @return {undefined}
   */
  function takeExtensions(
    this: void,
    extensions: readonly (Extension | List<Extension>)[],
    take?: TakeExtension | null | undefined
  ): undefined {
    /**
     * The index of the current extension.
     *
     * @var {number} index
     */
    let index: number = -1

    // combine extensions.
    while (++index < extensions.length) {
      ok(extensions[index], 'expected `extensions[index]`')

      /**
       * The current extension or list of extensions.
       *
       * @const {Extension | List<Extension>} value
       */
      const extension: Extension | List<Extension> = extensions[index]!

      // merge sublist.
      if (isList(extension)) {
        takeExtensions([...extension], take)
        continue
      }

      /**
       * The current {@linkcode extension} field.
       *
       * @var {keyof Extension} field
       */
      let field: keyof Extension

      ok(extension, 'expected `extension`')

      for (field in extension) {
        if (Object.hasOwnProperty.call(extension, field)) {
          /**
           * The incoming extension field value.
           *
           * @var {unknown} right
           */
          let right: unknown

          switch (field) {
            case 'afterEnter':
            case 'afterExit':
            case 'beforeEnter':
            case 'beforeExit':
              right = extension[field]
              if (right && !isList(right)) right = [right]
              if (right) context.config[field].push(...right as List<Handle>)
              break
            case 'enter':
            case 'exit':
              Object.assign(context.config[field], extension[field])
              break
            case 'transforms':
              right = extension[field]
              if (right) context.config[field].push(...right as List<Transform>)
              break
            default:
              take?.(context.config, extension, field)
              break
          }
        }
      }
    }

    return void extensions
  }
}
