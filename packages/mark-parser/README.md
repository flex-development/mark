# mark-parser

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-parser%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-parser.svg)](https://npmjs.com/package/@flex-development/mark-parser)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-parser.svg)](https://www.npmcharts.com/compare/@flex-development/mark-parser?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-parser?cache)](https://bundlephobia.com/package/@flex-development/mark-parser)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-parser)](https://packagephobia.now.sh/result?p=@flex-development/mark-parser)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-parser)](https://bundlephobia.com/package/@flex-development/mark-parser)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

finite state machine tokenizer

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

This package is a tokenization utility. The underlying tokenizer is implemented as a state machine that produces tokens
with positional information, as well as any other fields attached when the token was opened. Tokens are turned into
events, with the tokenizer calling any defined resolvers in the process.

## When should I use this?

This package can be used to tokenize a [file][vfile], `Uint8Array`, string, or a list containing these values,
like command-line arguments. Developers familiar with [micromark][] will find that tokenizers and constructs (objects
used to define how to parse text) in this package work similarly.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-parser
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { tokenize } from 'https://esm.sh/@flex-development/mark-parser'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { tokenize } from 'https://esm.sh/@flex-development/mark-parser'
</script>
```

## Use

**TODO**: use

## API

**TODO**: api

> Please refer to the [source code](./src/) for documentation.

## Types

This package is fully typed with [TypeScript][].\
It exports additional types.

## Project

### Version

mark-parser adheres to [semver][].

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

[micromark]: https://github.com/micromark/micromark

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[vfile]: https://github.com/vfile/vfile

[yarn]: https://yarnpkg.com
