/**
 * @file Nodes - ObjectMember
 * @module examples/jack/ast/nodes/ObjectMember
 */

import type {
  Data,
  FieldSeparator,
  Identifier,
  ObjectMemberContent,
  Parent,
  StringExpression
} from '@flex-development/jack/ast'

/**
 * Info associated with object members.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectMemberData extends Data {}

/**
 * An object member.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ObjectMember extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode FieldSeparator}
   * @see {@linkcode Identifier}
   * @see {@linkcode ObjectMemberContent}
   * @see {@linkcode StringExpression}
   *
   * @override
   */
  children: [
    Identifier | StringExpression,
    ...(FieldSeparator | ObjectMemberContent)[]
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectMemberData}
   *
   * @override
   */
  data?: ObjectMemberData | undefined

  /**
   * The object field name.
   */
  key: string

  /**
   * Whether the object member is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'objectMember'
}

export type { ObjectMember as default, ObjectMemberData }
