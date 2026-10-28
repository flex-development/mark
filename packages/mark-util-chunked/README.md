# mark-util-chunked

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-util-chunked%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-util-chunked.svg)](https://npmjs.com/package/@flex-development/mark-util-chunked)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-util-chunked.svg)](https://www.npmcharts.com/compare/@flex-development/mark-util-chunked?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-util-chunked?cache)](https://bundlephobia.com/package/@flex-development/mark-util-chunked)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-util-chunked)](https://packagephobia.now.sh/result?p=@flex-development/mark-util-chunked)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-util-chunked)](https://bundlephobia.com/package/@flex-development/mark-util-chunked)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[`mark`][mark] utility to splice and push into giant arrays.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`push<T>(list, items)`][api-push]
  - [`splice<T>(list, start, remove[, items])`][api-splice]
- [Types](#types)
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)

## What is this?

This package exposes algorithms for splicing and pushing into giant arrays.

## When should I use this?

This package is useful when creating your own your own [mark][] extensions and utilities.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-util-chunked
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { push, splice } from 'https://esm.sh/@flex-development/mark-util-chunked'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { push, splice } from 'https://esm.sh/@flex-development/mark-util-chunked'
</script>
```

## Use

```ts
import { push, splice } from '@flex-development/mark-util-chunked'
import { ev } from '@flex-development/mark-util-symbol'
import type { Token } from '@flex-development/mark'

// ...

const token: Token = events[open][1]

// ...

next = push(next, [[ev.enter, token, context], [ev.exit, token, context]])

// ...

splice(events, open - 1, index - open + 3, next)

// ...
```

## API

This package exports the identifiers [`push`][api-push] and [`splice`][api-splice].\
There is no default export.

### `push<T>(list, items)`

Append items to the end of `list`.

Items are added in batches to prevent V8 from hanging.\
When `list` is empty, `items` is returned to prevent a potentially expensive operation.

#### Type Parameters

- `T` (`any`)
  — The list item type

#### Parameters

- `list` (`T[]`)
  — the list to operate on
- `items` (`T[]`)
  — the items to inject into `list`

#### Returns

(`T[]`) `items` when `list` is empty, `list` with appended items otherwise

### `splice<T>(list, start, remove[, items])`

Like [`Array#splice`][array-splice], but smarter.

Remove items from `list` and, if necessary, insert new `items` in their place, returning the deleted elements.

> 👉 **Note**: `Array#splice` takes all items to be inserted as individual arguments which causes a stack overflow in V8
> when trying to insert a large number of items (i.e. 100k).

#### Type Parameters

- `T` (`any`)
  — The list item type

#### Parameters

- `list` (`T[]`)
  — the list to operate on
- `start` ([`Numeric`][numeric] | `number`)
  — the index in `list` to remove and/or insert items at (can be negative)
- `remove` ([`Numeric`][numeric] | `number`)
  — the number of items to remove
- `items` ([`List<T>`][list] | `null` | `undefined`, optional)
  — the items to inject into `list`

#### Returns

(`T[]`) The list of removed items

## Types

This package is fully typed with [TypeScript][].\
It exports no additional types.

## Project

### Version

mark-util-chunked adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.\
Support long-term stability by sponsoring Flex Development.

[api-push]: #pushtlist-items

[api-splice]: #splicetlist-start-remove-items

[array-splice]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[list]: ../mark/src/core/types/list.mts

[mark]: ../mark/README.md

[numeric]: ../mark/src/core/types/numeric.mts

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
