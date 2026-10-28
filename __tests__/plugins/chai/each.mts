/**
 * @file Plugins - each
 * @module tests/plugins/chai/each
 */

export default plugin

/**
 * Chai plugin to allow for assertions on each item in a list.
 *
 * @see {@linkcode Chai.ChaiStatic}
 * @see {@linkcode Chai.ChaiUtils}
 *
 * @param {ChaiStatic} chai
 *  The `chai` module
 * @param {Chai.ChaiUtils} utils
 *  The `chai` utilities module
 * @return {undefined}
 */
function plugin(chai: Chai.ChaiStatic, utils: Chai.ChaiUtils): undefined {
  return void chai.Assertion.addProperty('each', each)

  /**
   * @this {Chai.AssertionStatic}
   *
   * @return {undefined}
   */
  function each(this: Chai.AssertionStatic): undefined {
    /**
     * Subject of assertion.
     *
     * @const {unknown} object
     */
    const object: unknown = utils.flag(this, 'object')

    new chai.Assertion(object).satisfies(list)

    for (const item of object as ReadonlySet<unknown> | readonly unknown[]) {
      /**
       * Assertion for list item.
       *
       * @const {Chai.Assertion} that
       */
      const that: Chai.Assertion = Object.create(this)

      utils.transferFlags(this as unknown as Chai.Assertion, that, false)
      utils.flag(that, 'object', item)

      new chai.Assertion(that)
    }

    return void undefined
  }
}

/**
 * Check if `thing` is a list.
 *
 * @this {void}
 *
 * @param {unknown} thing
 *  The value to check
 * @return {thing is ReadonlyArray<unknown> | ReadonlySet<unknown>}
 *  Whether `thing` is an array or set
 */
function list(
  this: void,
  thing: unknown
): thing is ReadonlySet<unknown> | readonly unknown[] {
  return Array.isArray(thing) || thing instanceof Set
}
