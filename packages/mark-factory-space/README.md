# mark-factory-space

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-factory-space%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-factory-space.svg)](https://npmjs.com/package/@flex-development/mark-factory-space)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-factory-space.svg)](https://www.npmcharts.com/compare/@flex-development/mark-factory-space?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-factory-space?cache)](https://bundlephobia.com/package/@flex-development/mark-factory-space)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-factory-space)](https://packagephobia.now.sh/result?p=@flex-development/mark-factory-space)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-factory-space)](https://bundlephobia.com/package/@flex-development/mark-factory-space)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[mark][] factory to parse [whitespace][ws].

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`factorySpace(effects, ok[, options])`][api-factory]
- [Types](#types)
  - [`Options`][types-options]
- [Contribute](#contribute)

## What is this?

This package exposes states to parse spaces and/or tabs.

## When should I use this?

This package may be useful when making your own mark extensions.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-factory-space
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { factorySpace } from 'https://esm.sh/@flex-development/mark-factory-space'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { factorySpace } from 'https://esm.sh/@flex-development/mark-factory-space'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifier [`factorySpace`][api-factory].\
The default export is `factorySpace`.

### `factorySpace(effects, ok[, options])`

Tokenize spaces and tabs.

#### Overloads

```ts
function factorySpace(
  this: void,
  effects: Effects,
  ok: State,
  options?: Options | null | undefined
): State
```

```ts
function factorySpace(
  this: void,
  effects: Effects,
  ok: State,
  type?: TokenType | null | undefined,
  max?: number | null | undefined
): State
```

#### Parameters

- `effects` ([`Effects`][effects])
  — the context object used to transition the state machine
- `ok` ([`State`][state])
  — the successful tokenization state
- `options` ([`Options`][types-options] | `null` | `undefined`, optional)
  — the tokenization options
- `type` ([`TokenType`][token-type] | `null` | `undefined`, optional)
  — the token type to capture whitespace as.\
  if omitted, whitespace will be captured without emitting a token
- `max` (`number` | `null` | `undefined`, optional)
  — the maximum number of spaces/tabs to consume (exclusive)

#### Returns

([`State`][state]) The initial state

## Types

This package is fully typed with [TypeScript][].\
It exports additional types.

### `Options`

Options for tokenizing whitespace (`interface`).

### Properties

- `fields` ([`TokenFields`][token-fields] | `null` | `undefined`, optional)
  — the token fields to apply if whitespace is encountered
- `max` (`number` | `null` | `undefined`, optional)
  — the maximum number of spaces/tabs to consume (exclusive)
  - **default**: `max ? max - 1 : Number.POSITIVE_INFINITY`
- `nok` ([`State`][state] | `null` | `undefined`, optional)
  — the failed tokenization state.\
  this state is switched to when no whitespace can be captured
- `type` ([`TokenType`][token-type] | `null` | `undefined`, optional)
  — the token type to capture whitespace as.\
  if omitted, whitespace will be captured without emitting a token

## Project

### Version

mark-factory-space adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.\
Support long-term stability by sponsoring Flex Development.

[api-factory]: #factoryspaceeffects-ok-options

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[mark]: ../../README.md

[effects]: ../mark/src/parse/interfaces/effects.mts

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[semver]: https://semver.org

[state]: ../mark/src/parse/types/state.mts

[token-fields]: ../mark/src/parse/interfaces/token-fields.mts

[token-type]: ../mark/src/parse/types/token-type.mts

[types-options]: #options

[typescript]: https://www.typescriptlang.org

[ws]: https://github.com/micromark/micromark/tree/main/packages/micromark-util-character#markdownlineendingorspacecode

[yarn]: https://yarnpkg.com
