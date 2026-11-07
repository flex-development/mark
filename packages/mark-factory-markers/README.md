# mark-factory-markers

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-factory-markers%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-factory-markers.svg)](https://npmjs.com/package/@flex-development/mark-factory-markers)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-factory-markers.svg)](https://www.npmcharts.com/compare/@flex-development/mark-factory-markers?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-factory-markers?cache)](https://bundlephobia.com/package/@flex-development/mark-factory-markers)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-factory-markers)](https://packagephobia.now.sh/result?p=@flex-development/mark-factory-markers)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-factory-markers)](https://bundlephobia.com/package/@flex-development/mark-factory-markers)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[mark][] factory to parse markers.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`factoryMarkers(effects, ok, nok, markers)`][api-factory]
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package exposes states to parse markers.

## When should I use this?

This package may be useful when making your own mark extensions.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-factory-markers
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { factorMarkers } from 'https://esm.sh/@flex-development/mark-factory-markers'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { factoryMarkers } from 'https://esm.sh/@flex-development/mark-factory-markers'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifier [`factoryMarkers`][api-factory].\
The default export is `factoryMarkers`.

### `factoryMarkers(effects, ok, nok, markers)`

Create a state that tokenizes a sequence of markers.

The returned state consumes each marker in `markers` in order.\
Each marker produces a token using the specified token type.

If the input does not match the expected sequence, tokenization fails without consuming the mismatching character.

#### Parameters

- `effects` ([`Effects`][effects])
  — the context object used to transition the state machine
- `ok` ([`State`][state])
  — the successful tokenization state
- `nok` ([`State`][state])
  — the failed tokenization state
- `markers` ([`CodeCheck`][code-check] | [`Markers`][markers])
  — the marker matcher, info object, code, or sequence

#### Returns

([`State`][state]) The initial state

## Types

This package is fully typed with [TypeScript][].\
It exports no additional types.

## Project

### Version

mark-factory-markers adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.\
Support long-term stability by sponsoring Flex Development.

[api-factory]: #factorymarkerseffects-ok-nok-markers

[code-check]: ../mark/src/parse/types/code-check.mts

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[mark]: ../../README.md

[effects]: ../mark/src/parse/interfaces/effects.mts

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[markers]: ../mark/src/parse/types/markers.mts

[semver]: https://semver.org

[state]: ../mark/src/parse/types/state.mts

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
