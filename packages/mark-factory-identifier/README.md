# mark-factory-identifier

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-factory-identifier%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-factory-identifier.svg)](https://npmjs.com/package/@flex-development/mark-factory-identifier)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-factory-identifier.svg)](https://www.npmcharts.com/compare/@flex-development/mark-factory-identifier?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-factory-identifier?cache)](https://bundlephobia.com/package/@flex-development/mark-factory-identifier)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-factory-identifier)](https://packagephobia.now.sh/result?p=@flex-development/mark-factory-identifier)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-factory-identifier)](https://bundlephobia.com/package/@flex-development/mark-factory-identifier)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[mark][] factory to parse identifiers.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`factoryIdentifier(effects, ok, nok[, type])`][api-factory]
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package exposes states to parse identifiers.

## When should I use this?

This package may be useful when making your own mark extensions.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-factory-identifier
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { factoryIdentifier } from 'https://esm.sh/@flex-development/mark-factory-identifier'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { factoryIdentifier } from 'https://esm.sh/@flex-development/mark-factory-identifier'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifier [`factoryIdentifier`][api-factory].\
There is no default export.

### `factoryIdentifier(effects, ok, nok[, type])`

Tokenize an identifier.

#### Parameters

- `effects` ([`Effects`][effects])
  — the context object used to transition the state machine
- `ok` ([`State`][state])
  — the successful tokenization state
- `nok` ([`State`][state])
  — the failed tokenization state
- `type` ([`TokenType`][token-type] | `null` | `undefined`, optional)
  — the token type to capture the identifier as

#### Returns

([`State`][state]) The initial state

## Types

This package is fully typed with [TypeScript][].\
It exports no additional types.

## Project

### Version

mark-factory-identifier adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

This project has a [code of conduct](../../CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.
Support long-term stability by sponsoring Flex Development.

[api-factory]: #factoryidentifiereffects-ok-nok-type

[mark]: ../../README.md

[effects]: ../mark/src/parse/interfaces/effects.mts

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[semver]: https://semver.org

[state]: ../mark/src/parse/types/state.mts

[token-type]: ../mark/src/parse/types/token-type.mts

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
