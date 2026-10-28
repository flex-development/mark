# mark-util-character

[![github release](https://img.shields.io/github/v/release/flex-development/mark.svg?include_prereleases\&sort=date\&filter=mark-util-character%40*)](https://github.com/flex-development/mark/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-util-character.svg)](https://npmjs.com/package/@flex-development/mark-util-character)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-util-character.svg)](https://www.npmcharts.com/compare/@flex-development/mark-util-character?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-util-character?cache)](https://bundlephobia.com/package/@flex-development/mark-util-character)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-util-character)](https://packagephobia.now.sh/result?p=@flex-development/mark-util-character)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-util-character)](https://bundlephobia.com/package/@flex-development/mark-util-character)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark)](LICENSE.md)

[`mark`][mark] utility to handle character codes.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`asciiAlpha(code)`][api-ascii-alpha]
  - [`asciiAlphanumeric(code)`][api-ascii-alphanumeric]
  - [`asciiAtext(code)`][api-ascii-atext]
  - [`asciiControl(code)`][api-ascii-control]
  - [`asciiDigit(code)`][api-ascii-digit]
  - [`asciiHexDigit(code)`][api-hex-digit]
  - [`asciiPunctuation(code)`][api-ascii-punctuation]
  - [`checker(test)`][api-checker]
  - [`eos(code)`][api-eos]
  - [`htab(code)`][api-htab]
  - [`idContinue(code)`][api-id-continue]
  - [`idStart(code)`][api-id-start]
  - [`isCode(value)`][api-is-code]
  - [`lineEndingOrWhitespace(code)`][api-line-ending-or-whitespace]
  - [`lineEnding(code)`][api-line-ending]
  - [`space(code)`][api-space]
  - [`streamBreak(code)`][api-stream-break]
  - [`unicodePunctuation(code)`][api-unicode-punctuation]
  - [`unicodeWhitespace(code)`][api-unicode-whitespace]
  - [`vtab(code)`][api-vtab]
  - [`whitespace(code)`][api-whitespace]
- [Types](#types)
  - [`LineEnding`][types-line-ending]
  - [`Serialize`][types-serialize]
  - [`Space`][types-space]
  - [`Whitespace`][types-whitespace]
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)

## What is this?

This package exposes algorithms for checking whether character codes match certain groups.

## When should I use this?

This package is useful when creating your own your own [mark][] extensions and utilities.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-util-character
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { asciiAlpha } from 'https://esm.sh/@flex-development/mark-util-character'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { asciiAlpha } from 'https://esm.sh/@flex-development/mark-util-character'
</script>
```

## Use

```js
import { chars, codes, constants, ev } from '@flex-development/mark-util-character'

console.log(chars.at) // '@'
console.log(codes.at) // 64
console.log(constants.tabSize) // 2
console.log(ev.enter) // 'enter'
```

## API

This package exports the following identifiers:

- [`asciiAlpha`][api-ascii-alpha]
- [`asciiAlphanumeric`][api-ascii-alphanumeric]
- [`asciiAtext`][api-ascii-atext]
- [`asciiControl`][api-ascii-control]
- [`asciiDigit`][api-ascii-digit]
- [`asciiHexDigit`][api-hex-digit]
- [`asciiPunctuation`][api-ascii-punctuation]
- [`checker`][api-checker]
- [`eos`][api-eos]
- [`htab`][api-htab]
- [`idContinue`][api-id-continue]
- [`idStart`][api-id-start]
- [`isCode`][api-is-code]
- [`lineEndingOrWhitespace`][api-line-ending-or-whitespace]
- [`lineEnding`][api-line-ending]
- [`space`][api-space]
- [`streamBreak`][api-stream-break]
- [`unicodePunctuation`][api-unicode-punctuation]
- [`unicodeWhitespace`][api-unicode-whitespace]
- [`vtab`][api-vtab]
- [`whitespace`][api-whitespace]

There is no default export.

### `asciiAlpha(code)`

Check whether a character code represents an ASCII alpha (`a` through `z`, case insensitive).

An ***ASCII alpha*** is an ASCII upper alpha or ASCII lower alpha.\
An ***ASCII upper alpha*** is a character in the inclusive range `U+0041` (`A`) to `U+005A` (`Z`).\
An ***ASCII lower alpha*** is a character in the inclusive range `U+0061` (`a`) to `U+007A` (`z`).

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `asciiAlphanumeric(code)`

Check whether a character code represents an ASCII alphanumeric (`a` through `z`, case insensitive, or `0` through `9`).

An ***ASCII alphanumeric*** is an ASCII digit (see [`asciiDigit`][api-ascii-digit])
or ASCII alpha (see [`asciiAlpha`][api-ascii-alpha]).

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `asciiAtext(code)`

Check whether a character code represents an ASCII atext.

atext is an ASCII alphanumeric (see [`asciiAlphanumeric`][api-ascii-alphanumeric]),
or a character in the following inclusive ranges:

- `U+0023` NUMBER SIGN (`#`) to `U+0027` APOSTROPHE (`'`)
- `U+002A` ASTERISK (`*`)
- `U+002B` PLUS SIGN (`+`)
- `U+002D` DASH (`-`)
- `U+002F` SLASH (`/`)
- `U+003D` EQUALS TO (`=`)
- `U+003F` QUESTION MARK (`?`)
- `U+005E` CARET (`^`) to `U+0060` GRAVE ACCENT (`` ` ``)
- `U+007B` LEFT CURLY BRACE (`{`) to `U+007E` TILDE (`~`)

See <https://tools.ietf.org/html/rfc5322> for more info.

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `asciiControl(code)`

Check whether a character code is an ASCII control character.

An ***ASCII control*** is a character in the inclusive range `U+0000` NULL (`NUL`) to `U+001F` (`US`),
or `U+007F` (`DEL`).

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `asciiDigit(code)`

Check whether a character code represents an ASCII digit (`0` through `9`).

An ***ASCII digit*** is a character in the inclusive range `U+0030` (`0`) to `U+0039` (`9`).

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `asciiHexDigit(code)`

Check whether a character code represents an ASCII hex digit  (`a` through `f`, case insensitive, or `0` through `9`).

An ***ASCII hex digit*** is an ASCII digit (see [`asciiDigit`][api-ascii-digit]),
ASCII upper hex digit, or an ASCII lower hex digit.\
An ***ASCII upper hex digit*** is a character in the inclusive range `U+0041` (`A`) to `U+0046` (`F`).\
An ***ASCII lower hex digit*** is a character in the inclusive range `U+0061` (`a`) to `U+0066` (`f`).

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `asciiPunctuation(code)`

Check whether a character code represents ASCII punctuation.

An ***ASCII punctuation*** is a character in the following inclusive ranges:

- `U+0021` EXCLAMATION MARK (`!`) to `U+002F` SLASH (`/`)
- `U+003A` COLON (`:`) to `U+0040` AT SIGN (`@`)
- `U+005B` LEFT SQUARE BRACKET (`[`) to `U+0060` GRAVE ACCENT (`` ` ``)
- `U+007B` LEFT CURLY BRACE (`{`) to `U+007E` TILDE (`~`)

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `checker(test[, serialize])`

Create a code check, i.e. guard, from a regular expression.

After serializing a character code, the guard will check if the character matches the bound regex.

#### Parameters

- `test` (`RegExp` | `string`)
  — the regular expression or regular expression pattern
- `serialize` ([`Serialize`][types-serialize] | `null` | `undefined`, optional)
  — serialize a character code

#### Returns

([`CodeCheck`][code-check]) The code check

### `eos(code)`

Check if `code` is the end-of-stream code.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

(`code is typeof codes.eos`) `true` if `code` is [`codes.eos`][codes], `false` otherwise

### `htab(code)`

Check if `code` represents a horizontal tab.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

(`code is typeof codes.ht | typeof codes.vht`)
`true` if `code` is [`codes.horizontalTab`][codes] (aka `codes.vht`) or [`codes.ht`][codes], `false` otherwise

### `idContinue(code)`

Check whether a character code can continue an identifier.

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `idStart(code)`

Check whether a character code can start an identifier.

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `isCode(value)`

Check if `value` looks like a character code.

#### Parameters

- `value` (`unknown`)
  — the thing to check

#### Returns

([`value is Code`][code]) `true` if `value` is a number or `null`, `false` otherwise

### `lineEndingOrWhitespace(code)`

Check if `code` represents a line ending or whitespace.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

(`code is LineEnding | Whitespace`)
`true` if `code` is [line ending][types-line-ending] or [whitespace][types-whitespace] code, `false` otherwise

### `lineEnding(code)`

Check if `code` represents a line ending.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

([`code is LineEnding`][types-line-ending]) `true` if `code` is line ending code, `false` otherwise

### `space(code)`

Check if `code` represents space.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

([`code is Space`][types-space]) `true` if `code` is space code, `false` otherwise

### `streamBreak(code)`

Check if `code` represents a stream break.

The stream break code can be written between chunks to signal separation, or a "pause" in the current stream.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

(`code is typeof codes.break`) `true` if `code` is [`codes.break`][codes], `false` otherwise

### `unicodePunctuation(code)`

Check whether a character code represents Unicode punctuation.

A ***Unicode punctuation*** is a character in the following Unicode categories:

- `Pc` (Punctuation, Connector)
- `Pd` (Punctuation, Dash)
- `Pe` (Punctuation, Close)
- `Pf` (Punctuation, Final quote)
- `Pi` (Punctuation, Initial quote)
- `Po` (Punctuation, Other)
- `Ps` (Punctuation, Open)

or an ASCII punctuation (see [`asciiPunctuation`][api-ascii-punctuation]).

See also:

- <https://www.fileformat.info/info/unicode/category/Pc/list.htm>
- <https://www.fileformat.info/info/unicode/category/Pd/list.htm>
- <https://www.fileformat.info/info/unicode/category/Pe/list.htm>
- <https://www.fileformat.info/info/unicode/category/Pf/list.htm>
- <https://www.fileformat.info/info/unicode/category/Pi/list.htm>
- <https://www.fileformat.info/info/unicode/category/Po/list.htm>
- <https://www.fileformat.info/info/unicode/category/Ps/list.htm>

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `unicodeWhitespace(code)`

Check whether a character code represents Unicode whitespace.

A ***Unicode whitespace*** is a character in the Unicode `Zs` (Separator, Space) category or one of the following:

- `U+0009` CHARACTER TABULATION (`HT`)
- `U+000A` LINE FEED (`LF`),
- `U+000C` FORM FEED (`FF`)
- `U+000D` CARRIAGE RETURN (`CR`)

See also:

- <https://www.fileformat.info/info/unicode/category/Zs/list.htm>

#### Parameters

- `code` ([`Code`][code])
  — the character code to check

#### Returns

(`boolean`) Whether the character code matches

### `vtab(code)`

Check if `code` represents a vertical tab.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

(`boolean`) `true` if `code` is [`codes.vt`][codes], `false` otherwise

### `whitespace(code)`

Check if `code` represents whitespace.

#### Parameters

- `code` (`unknown`)
  — the character code to check

#### Returns

([`code is Whitespace`][types-whitespace]) `true` if `code` is whitespace code, `false` otherwise

## Types

This package is fully typed with [TypeScript][].

### `LineEnding`

Union of [codes][] representing a line ending.

```ts
type LineEnding =
  | typeof codes.carriageReturn
  | typeof codes.carriageReturnLineFeed
  | typeof codes.cr
  | typeof codes.crlf
  | typeof codes.lf
  | typeof codes.lineFeed
  | typeof codes.ls
  | typeof codes.ps
  | typeof codes.vcr
  | typeof codes.vlf
```

### `Serialize`

Serialize a character code.

#### Parameters

- `code` ([`Code`][code])
  — the character code to serialize

#### Returns

(`string`) The character produced from `code`

### `Space`

Union of [codes][] representing space.

```ts
type Space = typeof codes.space | typeof codes.virtualSpace | typeof codes.vs
```

### `Whitespace`

Union of [codes][] representing whitespace.

```ts
type Whitespace =
  | Space
  | typeof codes.horizontalTab
  | typeof codes.ht
  | typeof codes.vht
```

## Project

### Version

mark-util-character adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.\
Support long-term stability by sponsoring Flex Development.

[api-ascii-alpha]: #asciialphacode

[api-ascii-alphanumeric]: #asciialphanumericcode

[api-ascii-atext]: #asciiatextcode

[api-ascii-control]: #asciicontrolcode

[api-ascii-digit]: #asciidigitcode

[api-ascii-punctuation]: #asciipunctuationcode

[api-checker]: #checkertest-serialize

[api-eos]: #eoscode

[api-hex-digit]: #asciihexdigitcode

[api-htab]: #htabcode

[api-id-continue]: #idcontinuecode

[api-id-start]: #idstartcode

[api-is-code]: #iscodevalue

[api-line-ending-or-whitespace]: #lineendingorwhitespacecode

[api-line-ending]: #lineendingcode

[api-space]: #spacecode

[api-stream-break]: #streambreakcode

[api-unicode-punctuation]: #unicodepunctuationcode

[api-unicode-whitespace]: #unicodewhitespacecode

[api-vtab]: #vtabcode

[api-whitespace]: #whitespacecode

[code-check]: ../mark/src/parse/types/code-check.mts

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[code]: ../mark/src/parse/types/code.mts

[codes]: ../mark-util-symbol/src/codes.mts

[contributing]: ../../CONTRIBUTING.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[mark]: ../mark/README.md

[semver]: https://semver.org

[types-line-ending]: #lineending

[types-serialize]: #serialize

[types-space]: #space

[types-whitespace]: #whitespace

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
