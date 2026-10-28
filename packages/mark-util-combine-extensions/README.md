# mark-util-combine-extensions

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-util-combine-extensions%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-util-combine-extensions.svg)](https://npmjs.com/package/@flex-development/mark-util-combine-extensions)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-util-combine-extensions.svg)](https://www.npmcharts.com/compare/@flex-development/mark-util-combine-extensions?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-util-combine-extensions?cache)](https://bundlephobia.com/package/@flex-development/mark-util-combine-extensions)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-util-combine-extensions)](https://packagephobia.now.sh/result?p=@flex-development/mark-util-combine-extensions)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-util-combine-extensions)](https://bundlephobia.com/package/@flex-development/mark-util-combine-extensions)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[mark][] utility to combine extensions.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`combineExtensions<T>(extensions)`][api-combine-extensions]
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package exposes a utility to merge multiple syntax extensions into one.

## When should I use this?

This package is useful when building mark extensions.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-util-combine-extensions
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { combineExtensions } from 'https://esm.sh/@flex-development/mark-util-combine-extensions'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { combineExtensions } from 'https://esm.sh/@flex-development/mark-util-combine-extensions'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifier [`combineExtensions`][api-combine-extensions].\
The default export is `combineExtensions`.

### `combineExtensions<T>(extensions)`

Combine multiple extensions into one.

#### Overloads

```ts
function combineExtensions<T extends NormalizedExtension>(
  extensions: Extension | Extension[] | null | undefined
): T
```

```ts
function combineExtensions<T extends NormalizedExtension>(
  ...extensions: (Extension | Extension[] | null | undefined)[]
): T
```

#### Type Parameters

- `T` ([`NormalizedExtension`][normalized-extension])
  — the combined extension

#### Parameters

- `extensions` ([`Extension`][extension] | [`Extension[]`][extension] | `null` | `undefined`)
  — the extension to copy or the list of extensions to combine
- `...extensions` ([`(Extension | Extension[] | null | undefined)[]`][extension])
  — the extensions to combine

#### Returns

(`T`) The combined extension

## Types

This package is fully typed with [TypeScript][].\
It exports no additional types.

## Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].
By interacting with this repository, organization, or community you agree to abide by its terms.

[api-combine-extensions]: #combineextensionstextensions

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[extension]: ../mark/src/parse/interfaces/extension.mts

[mark]: ../../README.md

[normalized-extension]: ../mark/src/parse/types/normalized-extension.mts

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
