# mark-util-symbol

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-util-symbol%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-util-symbol.svg)](https://npmjs.com/package/@flex-development/mark-util-symbol)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-util-symbol.svg)](https://www.npmcharts.com/compare/@flex-development/mark-util-symbol?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-util-symbol?cache)](https://bundlephobia.com/package/@flex-development/mark-util-symbol)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-util-symbol)](https://packagephobia.now.sh/result?p=@flex-development/mark-util-symbol)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-util-symbol)](https://bundlephobia.com/package/@flex-development/mark-util-symbol)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[`mark`][mark] utility with symbols.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)

## What is this?

This package exposes constants used throughout the [mark][] ecosystem.

## When should I use this?

This package is useful when creating your own your own [mark][] extensions and utilities.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-util-symbol
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { chars, codes } from 'https://esm.sh/@flex-development/mark-util-symbol'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { chars, codes } from 'https://esm.sh/@flex-development/mark-util-symbol'
</script>
```

## Use

```js
import { chars, codes, constants, ev } from '@flex-development/mark-util-symbol'

console.log(chars.at) // '@'
console.log(codes.at) // 64
console.log(constants.tabSize) // 2
console.log(ev.enter) // 'enter'
```

## API

This package exports the identifiers `chars`, `codes`, `constants`, and `ev`.\
There is no default export.

Each identifier is an object mapping strings to values.\
See the [code](./src/) for the exposed data.

## Types

This package is fully typed with [TypeScript][].\
It exports no additional types.

## Project

### Version

mark-util-symbol adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.\
Support long-term stability by sponsoring Flex Development.

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[mark]: ../mark/README.md

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
