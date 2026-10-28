## mark-util-symbol@1.0.0-alpha.13 (2026-10-28)

### ⚠ BREAKING CHANGES

- **compile:** [`Preprocess`] allow `void` return
- **ast:** `Postprocess`
- **ast:** [`CompileContext`] remove `preprocess`
- **compile:** [`CompileContext`] remove `preprocess`
- **ast:** `FragmentChild`, `FragmentChildMap`
- api improvements
- project rename

### :package: Build

- [[`d2bee66`](https://github.com/flex-development/mark/commit/d2bee6655bb0bb857edc55c05a069f0f40633333)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.3 to 0.18.4 ([#9](https://github.com/flex-development/mark/issues/9))
- [[`167cbf0`](https://github.com/flex-development/mark/commit/167cbf0848880a7ad491f52fd406158a4057cd49)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.4 to 0.18.5 ([#21](https://github.com/flex-development/mark/issues/21))
- [[`da640b1`](https://github.com/flex-development/mark/commit/da640b190542ddb69e68541b2ce282a8aaf65107)] **deps-dev:** Bump @commitlint/cli from 21.2.0 to 21.2.1 in the commitlint group ([#19](https://github.com/flex-development/mark/issues/19))
- [[`963dbe8`](https://github.com/flex-development/mark/commit/963dbe8898d32373688a797555915e9b0cf51da5)] **deps-dev:** Bump @commitlint/cli from 21.2.1 to 21.2.2 in the commitlint group ([#51](https://github.com/flex-development/mark/issues/51))
- [[`acf8ef8`](https://github.com/flex-development/mark/commit/acf8ef8083dfd617fc70ed268afa6028107b26c8)] **deps-dev:** Bump @commitlint/cli from 21.2.3 to 21.2.4 in the commitlint group ([#134](https://github.com/flex-development/mark/issues/134))
- [[`76ac12a`](https://github.com/flex-development/mark/commit/76ac12a86afb589ff5715563630bd8b7a19350e1)] **deps-dev:** Bump cspell from 10.0.1 to 10.1.0 ([#58](https://github.com/flex-development/mark/issues/58))
- [[`b0ace84`](https://github.com/flex-development/mark/commit/b0ace8421d8b83e21d8907001e1965da6f6343c2)] **deps-dev:** Bump cspell from 10.1.0 to 10.1.1 ([#60](https://github.com/flex-development/mark/issues/60))
- [[`50c796e`](https://github.com/flex-development/mark/commit/50c796e5be426f6d3bbe0fdda5253f36cb0fcfd6)] **deps-dev:** Bump cspell from 10.1.1 to 10.2.0 ([#68](https://github.com/flex-development/mark/issues/68))
- [[`e22f12c`](https://github.com/flex-development/mark/commit/e22f12cae308029a768eb0743e0c0c86913c488e)] **deps-dev:** Bump cspell from 10.2.0 to 10.3.0 ([#78](https://github.com/flex-development/mark/issues/78))
- [[`2b7cd39`](https://github.com/flex-development/mark/commit/2b7cd393f103e294619fcc58521f119832eed36b)] **deps-dev:** Bump cspell from 10.3.0 to 10.3.1 ([#82](https://github.com/flex-development/mark/issues/82))
- [[`b753b19`](https://github.com/flex-development/mark/commit/b753b191115c4150fe29e6ac2e70109059b1c8e9)] **deps-dev:** Bump cspell from 10.3.1 to 10.3.2 ([#84](https://github.com/flex-development/mark/issues/84))
- [[`79e4777`](https://github.com/flex-development/mark/commit/79e4777957ececd5dd72841f4ceaf84349470082)] **deps-dev:** Bump cspell from 10.3.2 to 10.3.3 ([#85](https://github.com/flex-development/mark/issues/85))
- [[`35561a6`](https://github.com/flex-development/mark/commit/35561a6fc2c2f96e9fdf11c699d88752a6697158)] **deps-dev:** Bump cspell from 10.3.4 to 10.3.5 ([#92](https://github.com/flex-development/mark/issues/92))
- [[`6b8fe10`](https://github.com/flex-development/mark/commit/6b8fe10674c47423031bbd022207689a64d16767)] **deps-dev:** Bump cspell from 10.3.5 to 10.3.6 ([#97](https://github.com/flex-development/mark/issues/97))
- [[`a2321ca`](https://github.com/flex-development/mark/commit/a2321ca2426fb6ba1e3cbcefa72060e4db996c10)] **deps-dev:** Bump cspell from 10.3.6 to 10.4.0 ([#131](https://github.com/flex-development/mark/issues/131))
- [[`262f7d2`](https://github.com/flex-development/mark/commit/262f7d27fcfe3fd2fd12dbb9f268d00669dcad7f)] **deps-dev:** Bump dprint from 0.54.0 to 0.55.1 ([#13](https://github.com/flex-development/mark/issues/13))
- [[`1fac5e0`](https://github.com/flex-development/mark/commit/1fac5e0b64578917f5565d64d0209bdfd3cf6a9a)] **deps-dev:** Bump dprint from 0.55.1 to 0.55.2 ([#24](https://github.com/flex-development/mark/issues/24))
- [[`a018831`](https://github.com/flex-development/mark/commit/a01883182303de896a7dcc8ed558592bd2e76fe9)] **deps-dev:** Bump dprint from 0.55.2 to 0.56.1 ([#57](https://github.com/flex-development/mark/issues/57))
- [[`fb4b83c`](https://github.com/flex-development/mark/commit/fb4b83cf08bb204bf51f5bc75fb562de31af1ada)] **deps-dev:** Bump dprint from 0.56.1 to 0.57.0 ([#67](https://github.com/flex-development/mark/issues/67))
- [[`0021b2d`](https://github.com/flex-development/mark/commit/0021b2de2d21cf508b6fe550e565ed5e081a3926)] **deps-dev:** Bump dprint from 0.57.0 to 0.57.4 ([#72](https://github.com/flex-development/mark/issues/72))
- [[`9ba7844`](https://github.com/flex-development/mark/commit/9ba7844f65f016dd00538c9b908f25d0900354b3)] **deps-dev:** bump dprint from 0.57.4 to 0.60.1
- [[`0e2a6a0`](https://github.com/flex-development/mark/commit/0e2a6a03824d0bbe2cd43b8646a3a9b75e92e492)] **deps-dev:** Bump dprint from 0.63.0 to 0.64.0 ([#136](https://github.com/flex-development/mark/issues/136))
- [[`d914916`](https://github.com/flex-development/mark/commit/d914916a134a2be853e86eba0cd3a1c7bc8eaa97)] **deps-dev:** Bump dprint from 0.64.0 to 0.64.3 ([#141](https://github.com/flex-development/mark/issues/141))
- [[`9b49f38`](https://github.com/flex-development/mark/commit/9b49f38cfd9f768fc2dd543d32d14f206b6212c0)] **deps-dev:** Bump happy-dom from 20.10.3 to 20.10.4 ([#3](https://github.com/flex-development/mark/issues/3))
- [[`0e56748`](https://github.com/flex-development/mark/commit/0e56748acbf965e2e7f50d99727e3948187d4809)] **deps-dev:** Bump happy-dom from 20.10.4 to 20.10.5 ([#4](https://github.com/flex-development/mark/issues/4))
- [[`a55595f`](https://github.com/flex-development/mark/commit/a55595fa14b4eadc643ce808f72963b77a11a518)] **deps-dev:** Bump happy-dom from 20.10.5 to 20.10.6 ([#5](https://github.com/flex-development/mark/issues/5))
- [[`267419a`](https://github.com/flex-development/mark/commit/267419a4347be8d814680a0a0c9cedd9f2b1b806)] **deps-dev:** Bump happy-dom from 20.10.6 to 20.11.0 ([#27](https://github.com/flex-development/mark/issues/27))
- [[`ff7f5e4`](https://github.com/flex-development/mark/commit/ff7f5e4f2a66d0301992849f0af166f21c258bc2)] **deps-dev:** Bump happy-dom from 20.11.0 to 20.11.1 ([#32](https://github.com/flex-development/mark/issues/32))
- [[`2d33204`](https://github.com/flex-development/mark/commit/2d33204bd1f6a4d3936ec64ab1a9a2d24ccce0f0)] **deps-dev:** Bump happy-dom from 20.11.1 to 20.11.2 ([#48](https://github.com/flex-development/mark/issues/48))
- [[`6e69da2`](https://github.com/flex-development/mark/commit/6e69da272364b51279ce022d6ac49926fd1ca9b7)] **deps-dev:** Bump happy-dom from 20.11.12 to 20.11.15 ([#63](https://github.com/flex-development/mark/issues/63))
- [[`efb5535`](https://github.com/flex-development/mark/commit/efb5535fa90983383b2c7c0917e4b411d828ca26)] **deps-dev:** Bump happy-dom from 20.11.15 to 20.12.0 ([#64](https://github.com/flex-development/mark/issues/64))
- [[`265b129`](https://github.com/flex-development/mark/commit/265b129be492b3a473e927ff206387724ebda773)] **deps-dev:** Bump happy-dom from 20.11.2 to 20.11.6 ([#55](https://github.com/flex-development/mark/issues/55))
- [[`2770b5b`](https://github.com/flex-development/mark/commit/2770b5bc0a5e15104b1bf43b33ead1fa4a64d728)] **deps-dev:** Bump happy-dom from 20.11.6 to 20.11.12 ([#62](https://github.com/flex-development/mark/issues/62))
- [[`989d6ca`](https://github.com/flex-development/mark/commit/989d6ca4d6593845219e87dacb4800f6ead82ce9)] **deps-dev:** Bump happy-dom from 20.12.0 to 20.14.0 ([#71](https://github.com/flex-development/mark/issues/71))
- [[`ddc4790`](https://github.com/flex-development/mark/commit/ddc4790758143214dcd36d2fbabdecfcc6d41ea9)] **deps-dev:** Bump happy-dom from 20.14.0 to 20.14.3 ([#79](https://github.com/flex-development/mark/issues/79))
- [[`926de30`](https://github.com/flex-development/mark/commit/926de3022dcbf00a2c120703fe984c6ef5def04d)] **deps-dev:** Bump happy-dom from 20.14.3 to 20.14.5 ([#81](https://github.com/flex-development/mark/issues/81))
- [[`d3076ed`](https://github.com/flex-development/mark/commit/d3076edbabe99fd697f6c489881ee6b116c93f15)] **deps-dev:** Bump happy-dom from 21.0.1 to 21.0.3 ([#129](https://github.com/flex-development/mark/issues/129))
- [[`af7bf29`](https://github.com/flex-development/mark/commit/af7bf2990c03dc6e4af4b0b5fb84bfd6cbbbbb6c)] **deps-dev:** Bump happy-dom from 21.0.3 to 21.0.4 ([#140](https://github.com/flex-development/mark/issues/140))
- [[`913f102`](https://github.com/flex-development/mark/commit/913f102f94f8ac97c9c9da412196af9736f9de5b)] **deps-dev:** Bump rollup from 4.62.0 to 4.62.2 ([#7](https://github.com/flex-development/mark/issues/7))
- [[`18a1180`](https://github.com/flex-development/mark/commit/18a11803caeb5fcb3a5ca87cc39fd0932b19f7c0)] **deps-dev:** Bump rollup from 4.62.2 to 4.62.3 ([#35](https://github.com/flex-development/mark/issues/35))
- [[`39627da`](https://github.com/flex-development/mark/commit/39627dad79c6cd1c282070f3999e900351776d5a)] **deps-dev:** Bump rollup from 4.62.4 to 4.62.5 in the rollup group ([#53](https://github.com/flex-development/mark/issues/53))
- [[`ac288e7`](https://github.com/flex-development/mark/commit/ac288e7b420c7cad0ddc5cb1477c42b3b63e84b2)] **deps-dev:** Bump rollup from 4.62.5 to 4.63.1 in the rollup group across 1 directory ([#61](https://github.com/flex-development/mark/issues/61))
- [[`69d0e13`](https://github.com/flex-development/mark/commit/69d0e13661b4fc13f230d0853ca9ffd248f4e9e0)] **deps-dev:** Bump rollup from 4.63.1 to 4.63.2 in the rollup group across 1 directory ([#80](https://github.com/flex-development/mark/issues/80))
- [[`c3f7faf`](https://github.com/flex-development/mark/commit/c3f7fafde59b68c74198c5998b7ad3439a262fa9)] **deps-dev:** Bump rollup from 4.63.2 to 4.63.3 in the rollup group ([#83](https://github.com/flex-development/mark/issues/83))
- [[`7a0d354`](https://github.com/flex-development/mark/commit/7a0d354a3b061f73ffa48c35de3d1b888e195a9d)] **deps-dev:** Bump rollup from 4.63.3 to 4.63.4 in the rollup group ([#86](https://github.com/flex-development/mark/issues/86))
- [[`ac8645e`](https://github.com/flex-development/mark/commit/ac8645ee1d264a7c26b231f621fe5f14aa88d537)] **deps-dev:** Bump rollup from 4.63.5 to 4.63.6 in the rollup group ([#94](https://github.com/flex-development/mark/issues/94))
- [[`f86dfb5`](https://github.com/flex-development/mark/commit/f86dfb58c8b3558c2bac4a575a193d604dfcb71a)] **deps-dev:** Bump rollup from 4.63.6 to 4.64.0 in the rollup group ([#99](https://github.com/flex-development/mark/issues/99))
- [[`6955cbf`](https://github.com/flex-development/mark/commit/6955cbfa386c1fae6b5ec1a5dbe5f95569eb8306)] **deps-dev:** Bump rollup from 4.64.10 to 4.64.12 in the rollup group ([#137](https://github.com/flex-development/mark/issues/137))
- [[`8b9cc9b`](https://github.com/flex-development/mark/commit/8b9cc9bf075aa988039b377ff3f7d4512f0fe830)] **deps-dev:** Bump rollup from 4.64.12 to 4.65.0 in the rollup group ([#138](https://github.com/flex-development/mark/issues/138))
- [[`0cb5274`](https://github.com/flex-development/mark/commit/0cb52742c864fef31e94b15924ff07ddc62468f9)] **deps-dev:** Bump rollup from 4.64.6 to 4.64.7 in the rollup group across 1 directory ([#130](https://github.com/flex-development/mark/issues/130))
- [[`93c54e5`](https://github.com/flex-development/mark/commit/93c54e55c7762c1bd22e0f439e7d18ae7f107850)] **deps-dev:** Bump rollup from 4.64.7 to 4.64.9 in the rollup group ([#133](https://github.com/flex-development/mark/issues/133))
- [[`ecdf497`](https://github.com/flex-development/mark/commit/ecdf4977ea2a5e42281220c8c290d25904ecd005)] **deps-dev:** Bump rollup from 4.64.9 to 4.64.10 in the rollup group across 1 directory ([#135](https://github.com/flex-development/mark/issues/135))
- [[`86d75c0`](https://github.com/flex-development/mark/commit/86d75c003fb2248e1887168a6f2eb556d790cfa4)] **deps-dev:** bump rollup packages
- [[`e678f98`](https://github.com/flex-development/mark/commit/e678f989b546db91dcb65dac1a9e09d505c41581)] **deps-dev:** Bump sh-syntax from 0.5.8 to 0.6.0 ([#20](https://github.com/flex-development/mark/issues/20))
- [[`2a89e56`](https://github.com/flex-development/mark/commit/2a89e56abcf90af69f29b56b942c34ebd8dba459)] **deps-dev:** Bump the commitlint group across 1 directory with 2 updates ([#11](https://github.com/flex-development/mark/issues/11))
- [[`6c8cd51`](https://github.com/flex-development/mark/commit/6c8cd5179c73acb5fe15bd4f3d05c92caeab7e4b)] **deps-dev:** Bump the commitlint group with 2 updates ([#15](https://github.com/flex-development/mark/issues/15))
- [[`37aefb7`](https://github.com/flex-development/mark/commit/37aefb74bc8de2afc7c6496270977bc33d41c91e)] **deps-dev:** Bump the commitlint group with 2 updates ([#88](https://github.com/flex-development/mark/issues/88))
- [[`67c78e4`](https://github.com/flex-development/mark/commit/67c78e4f4b943e39c1358e052e432f86b1ff1503)] **deps-dev:** Bump the vitest group across 1 directory with 2 updates ([#128](https://github.com/flex-development/mark/issues/128))
- [[`b99986d`](https://github.com/flex-development/mark/commit/b99986dfe9044793cfe83a8dddecee831322d03f)] **deps-dev:** Bump the vitest group across 1 directory with 2 updates ([#95](https://github.com/flex-development/mark/issues/95))
- [[`24d9a62`](https://github.com/flex-development/mark/commit/24d9a6206aaded09a2c5043a2b905758d27946e3)] **deps-dev:** Bump the vitest group across 1 directory with 4 updates ([#54](https://github.com/flex-development/mark/issues/54))
- [[`4a30c4d`](https://github.com/flex-development/mark/commit/4a30c4d7c70a9646bb01e7b779751ac66b38b725)] **deps-dev:** Bump the vitest group with 3 updates ([#18](https://github.com/flex-development/mark/issues/18))
- [[`fec95a0`](https://github.com/flex-development/mark/commit/fec95a069d317d1ed98b2e3110d34c34cfb5d5f8)] **deps-dev:** Bump the vitest group with 3 updates ([#2](https://github.com/flex-development/mark/issues/2))
- [[`98ff26e`](https://github.com/flex-development/mark/commit/98ff26e618db2bb6e215911e9eadf89f15170ac4)] **deps-dev:** Bump vite from 8.3.1 to 8.3.2 ([#98](https://github.com/flex-development/mark/issues/98))
- [[`0d5d96b`](https://github.com/flex-development/mark/commit/0d5d96b6b9fe8e3e7818131c76aa42bd1d479a6f)] **deps-dev:** Bump vite from 8.3.2 to 8.3.3 ([#105](https://github.com/flex-development/mark/issues/105))
- [[`469db7a`](https://github.com/flex-development/mark/commit/469db7ab63e7b6d5176fb6d6b1e9ad4c0c686a99)] **deps-dev:** Bump vite from 8.3.4 to 8.3.5 ([#139](https://github.com/flex-development/mark/issues/139))
- [[`d805e04`](https://github.com/flex-development/mark/commit/d805e04444b2b8c4d97f001c7fc6afe075cb04d8)] **deps:** Bump brace-expansion from 1.1.15 to 1.1.16 ([#31](https://github.com/flex-development/mark/issues/31))
- [[`6b99b79`](https://github.com/flex-development/mark/commit/6b99b79240663341b07250ac4c9fa374f772eea0)] **deps:** Bump brace-expansion from 1.1.16 to 1.1.21 ([#93](https://github.com/flex-development/mark/issues/93))
- [[`9fd570e`](https://github.com/flex-development/mark/commit/9fd570eeb69bc683ede6cb4c18fc140faa1e9cc4)] **deps:** Bump browserslist from 4.28.2 to 4.28.8 ([#65](https://github.com/flex-development/mark/issues/65))
- [[`bade2c0`](https://github.com/flex-development/mark/commit/bade2c0ad9dfd612f3b9b916d0355fb5505f9a49)] **deps:** Bump fast-uri from 3.1.2 to 3.1.4 ([#33](https://github.com/flex-development/mark/issues/33))
- [[`690beb2`](https://github.com/flex-development/mark/commit/690beb24e9653a6625652f44fb6465f31f1d9f12)] **deps:** Bump fast-uri from 3.1.4 to 3.1.5 ([#42](https://github.com/flex-development/mark/issues/42))
- [[`477e410`](https://github.com/flex-development/mark/commit/477e410876796977b3fe86df465aea50eb275096)] **deps:** Bump fast-uri from 3.1.5 to 3.1.7 ([#66](https://github.com/flex-development/mark/issues/66))
- [[`00498ff`](https://github.com/flex-development/mark/commit/00498ff0d7aceb205480398590fe66a6379a02db)] **deps:** Bump fast-uri from 3.1.7 to 3.1.9 ([#142](https://github.com/flex-development/mark/issues/142))
- [[`97820f6`](https://github.com/flex-development/mark/commit/97820f6e9758f4255e8df344201b8594bb415789)] **deps:** Bump js-yaml from 4.2.0 to 4.3.0 ([#30](https://github.com/flex-development/mark/issues/30))
- [[`489bdb1`](https://github.com/flex-development/mark/commit/489bdb10cb776369f8e581111054d451bd10cb6c)] **deps:** Bump js-yaml from 4.3.0 to 4.3.1 ([#45](https://github.com/flex-development/mark/issues/45))
- [[`2639671`](https://github.com/flex-development/mark/commit/26396718f074d0749a766bf2416a8acc3f848244)] **deps:** Bump js-yaml from 4.3.1 to 4.3.2 ([#74](https://github.com/flex-development/mark/issues/74))
- [[`5f30009`](https://github.com/flex-development/mark/commit/5f3000901b01b064f63187fc947bcf34498576cb)] **deps:** Bump postcss from 8.5.15 to 8.5.23 ([#36](https://github.com/flex-development/mark/issues/36))
- [[`65dbb78`](https://github.com/flex-development/mark/commit/65dbb78b364ff9a8dd038736d8e6b8459d2962be)] **deps:** Bump smol-toml from 1.8.0 to 1.9.0 ([#102](https://github.com/flex-development/mark/issues/102))
- [[`59da49b`](https://github.com/flex-development/mark/commit/59da49b395d5b4988842b93021470dcc28411e5f)] **deps:** Bump source-map-js from 1.2.1 to 1.2.2 ([#103](https://github.com/flex-development/mark/issues/103))
- [[`6a2e201`](https://github.com/flex-development/mark/commit/6a2e20138b8856f40bb30ff6eb684edc86e28a04)] **deps:** Bump tar from 7.5.16 to 7.5.20 ([#29](https://github.com/flex-development/mark/issues/29))
- [[`110fc0f`](https://github.com/flex-development/mark/commit/110fc0fcc2ac0671677167ee6215e983ae66155b)] **deps:** Bump tar from 7.5.20 to 7.5.22 ([#37](https://github.com/flex-development/mark/issues/37))
- [[`8521800`](https://github.com/flex-development/mark/commit/8521800904cdbcc8631c86b4caa7c9d8a3b84df7)] **deps:** Bump undici from 6.26.0 to 6.27.0 ([#8](https://github.com/flex-development/mark/issues/8))
- [[`4aff6c9`](https://github.com/flex-development/mark/commit/4aff6c92dd54135a9f97f0954479c9929390ba65)] **deps:** Bump undici from 6.27.0 to 6.28.0 ([#41](https://github.com/flex-development/mark/issues/41))
- [[`31957d2`](https://github.com/flex-development/mark/commit/31957d29982ece9a51dc455a4545a18aec4d4ca5)] **deps:** Bump undici from 6.28.0 to 6.29.0 ([#91](https://github.com/flex-development/mark/issues/91))
- [[`c77154c`](https://github.com/flex-development/mark/commit/c77154c08c2c52937971bdcaba13d4ab551eb565)] **deps:** Bump undici from 6.29.0 to 6.29.1 ([#143](https://github.com/flex-development/mark/issues/143))
- [[`a63a5f1`](https://github.com/flex-development/mark/commit/a63a5f141eab963ad04acc45a6e883ae510448b7)] **yarn:** bump yarn from 4.16.0 to 4.17.0
- [[`109aa1c`](https://github.com/flex-development/mark/commit/109aa1cb7b5bef467478bc765dfc01a10d0b8869)] **yarn:** bump yarn from 4.17.0 to 4.18.0

### :robot: Continuous Integration

- [[`8047fe4`](https://github.com/flex-development/mark/commit/8047fe47b0e51e533f5778bc16c491422df44b38)] **deps:** Bump actions/cache from 5.0.5 to 6.0.0 ([#10](https://github.com/flex-development/mark/issues/10))
- [[`f9e0a62`](https://github.com/flex-development/mark/commit/f9e0a62d175ce398c6b0f062db5d506510d0c9db)] **deps:** Bump actions/cache from 6.0.0 to 6.1.0 ([#12](https://github.com/flex-development/mark/issues/12))
- [[`3962375`](https://github.com/flex-development/mark/commit/396237589ce4fa4734557acae07159e9e651223b)] **deps:** Bump actions/checkout from 6.0.3 to 7.0.0 ([#6](https://github.com/flex-development/mark/issues/6))
- [[`0508ef4`](https://github.com/flex-development/mark/commit/0508ef447dbcf1dce95f7c7d7b4ef813868f4976)] **deps:** Bump actions/checkout from 7.0.0 to 7.0.1 ([#28](https://github.com/flex-development/mark/issues/28))
- [[`0000c9d`](https://github.com/flex-development/mark/commit/0000c9dfff38076f87f03c9213e29b777b7556b4)] **deps:** Bump actions/create-github-app-token from 3.2.0 to 3.3.0 ([#126](https://github.com/flex-development/mark/issues/126))
- [[`68786f4`](https://github.com/flex-development/mark/commit/68786f457e0fcece85c4b20d5d4815e18c0ad41c)] **deps:** Bump actions/setup-node from 6.4.0 to 7.0.0 ([#23](https://github.com/flex-development/mark/issues/23))
- [[`67bd900`](https://github.com/flex-development/mark/commit/67bd90025bc74f9b8b9e9ac9ca9ef93f55383469)] **deps:** Bump actions/setup-node from 7.0.0 to 7.1.0 ([#114](https://github.com/flex-development/mark/issues/114))
- [[`9e53869`](https://github.com/flex-development/mark/commit/9e53869ba59f1d8c1a6396e58d32a223d8b85647)] **deps:** Bump actions/upload-artifact from 7.0.1 to 7.0.2 ([#115](https://github.com/flex-development/mark/issues/115))
- [[`1877461`](https://github.com/flex-development/mark/commit/1877461ea0502b6b7fabf8e5936dd58fdb308326)] **deps:** Bump dprint/check from 2.3 to 2.4 ([#73](https://github.com/flex-development/mark/issues/73))
- [[`09010e8`](https://github.com/flex-development/mark/commit/09010e8f301b9a04100bd9f988606709f9674ff5)] **deps:** Bump dprint/check from 2.4 to 2.5 ([#75](https://github.com/flex-development/mark/issues/75))
- [[`7abf540`](https://github.com/flex-development/mark/commit/7abf5401d762d55ece8f7918e2366df9294c09f7)] **deps:** Bump streetsidesoftware/cspell-action from 8.4.0 to 9.0.1 ([#52](https://github.com/flex-development/mark/issues/52))
- [[`609c70d`](https://github.com/flex-development/mark/commit/609c70d7aae97306772e654d31a55d24459d6007)] **deps:** Bump streetsidesoftware/cspell-action from 9.0.1 to 9.1.0 ([#69](https://github.com/flex-development/mark/issues/69))
- [[`1eb59a1`](https://github.com/flex-development/mark/commit/1eb59a114ec07add7124b8d9b68cb21be97a1365)] **deps:** Bump streetsidesoftware/cspell-action from 9.1.0 to 9.2.0 ([#127](https://github.com/flex-development/mark/issues/127))
- [[`83abe7e`](https://github.com/flex-development/mark/commit/83abe7e9640f8015448042e7d6d53efc9b44273a)] **workflows:** `dependabot-dedupe` -> `dependabot-packages`

### :pencil: Documentation

- [[`55a9173`](https://github.com/flex-development/mark/commit/55a9173c2e41e0fbef410cf5a75d0614553ecbbd)] fix link to q&a discussion category
- [[`e3e98a5`](https://github.com/flex-development/mark/commit/e3e98a5f26e055b111ea3b220ffee7af9ef7b835)] **parse:** [`Now`] update summary

### :sparkles: Features

- [[`4b87213`](https://github.com/flex-development/mark/commit/4b872133f61892bf1c09d8d1bf97b1b07977c46a)] **ast:** `Context`, `ContextMap`
- [[`cf4c939`](https://github.com/flex-development/mark/commit/cf4c939fb00d5f697e065b196f589d1194da5272)] **ast:** `Extensions`
- [[`2d89748`](https://github.com/flex-development/mark/commit/2d89748b4bd0121a7388e410afacca4d634ab23e)] **ast:** hooks
- [[`187cfd3`](https://github.com/flex-development/mark/commit/187cfd39a8f4df810daed62eacdc733f194494df)] **ast:** migrate ast types from `@flex-development/fsm-compiler`
- [[`83a492d`](https://github.com/flex-development/mark/commit/83a492ded5590a36e9ba73ea7b1a7b0e06f7bf43)] **ast:** `FragmentChild`, `FragmentChildMap`
- [[`711302f`](https://github.com/flex-development/mark/commit/711302f71ef32750734c9e6ed4414fd39366d5ca)] **ast:** `Postprocess`
- [[`65edb6e`](https://github.com/flex-development/mark/commit/65edb6e3db78c78dc2463dcaf54b8cf5abd79989)] **compile:** `Context`, `ContextMap`
- [[`4fa6770`](https://github.com/flex-development/mark/commit/4fa677092f2c365738378b9785ba9c51cccfd435)] **compile:** `Extensions`
- [[`3313364`](https://github.com/flex-development/mark/commit/3313364d2685d994adb0a0267c98ba324747fe94)] **compile:** `InitializeResult`
- [[`f9fad72`](https://github.com/flex-development/mark/commit/f9fad72f4f0f1fd7dbd9015eaea728765cdcb845)] **compile:** `Postprocess`
- [[`52887df`](https://github.com/flex-development/mark/commit/52887df673a1f31ce884790e4b62268e2d689497)] **compile:** hooks
- [[`47f18e3`](https://github.com/flex-development/mark/commit/47f18e32c8b63c98a9b4a1f75999f5a6fa05e474)] **compile:** migrate types from `@flex-development/fsm-compiler`
- [[`1a7969e`](https://github.com/flex-development/mark/commit/1a7969ee935d7186d410b5d9b0d3f17869b2f90d)] **core:** `IfNever`, `IsNever`
- [[`7e23bd5`](https://github.com/flex-development/mark/commit/7e23bd562e41e5406e6315f6f7e86fa4305a8a2c)] **parse:** [`Hooks`] `afterStore`, `beforeStore`
- [[`c06fdc8`](https://github.com/flex-development/mark/commit/c06fdc8e032bf148342bf33a4bd3ed8a7997788f)] **parse:** [`TokenizeContext`] `check`, `parent`
- [[`6cf00d3`](https://github.com/flex-development/mark/commit/6cf00d3c75a2078516c2680a2e24c04420493a4a)] **parse:** [`TokenizeContext`] `contentType`
- [[`f78ccbe`](https://github.com/flex-development/mark/commit/f78ccbe1ff7ebeebec6607f39dcbbcd125b976ce)] **parse:** [`TokenizeContext`] `noEmptyTokens`, `noPrevious`
- [[`18ee9ce`](https://github.com/flex-development/mark/commit/18ee9cec05552697cafabfa1f9a9294dc36535f4)] **parse:** `CodeCheck`
- [[`4dcdb47`](https://github.com/flex-development/mark/commit/4dcdb4769ab042c76b0ad6daab623b86a7619c6b)] **parse:** `Construct#continuation`
- [[`00805d7`](https://github.com/flex-development/mark/commit/00805d7b4d81334448a2acf213c9105bbf4297c9)] **parse:** `Construct#exit`, `Exiter`
- [[`c584c3d`](https://github.com/flex-development/mark/commit/c584c3df25af0e60465738860635bc565a44c320)] **parse:** `ContainerState`, `TokenizeContext#containerState`
- [[`9a157db`](https://github.com/flex-development/mark/commit/9a157dbfc5822e3bd6c513e32855bceace566320)] **parse:** `Context`, `ContextMap`
- [[`39a8ff1`](https://github.com/flex-development/mark/commit/39a8ff1fff66a8d3df95f6f548951af0c8063376)] **parse:** `Extension#settings`
- [[`9e34521`](https://github.com/flex-development/mark/commit/9e3452117c3b772569489327bcf54d89ddfa4efa)] **parse:** `Extensions`, `ParseOptions`
- [[`8991acf`](https://github.com/flex-development/mark/commit/8991acfcebf1141cab27550777cfb7f846e3fe84)] **parse:** `Skip`
- [[`4a7e56e`](https://github.com/flex-development/mark/commit/4a7e56e925ca0cdccf91e160c8c5331d0e5fff5a)] **parse:** `TokenizeContext#moveOnBreak`
- [[`bc6d637`](https://github.com/flex-development/mark/commit/bc6d637c9a1b3f1cc0acb4573ff5027c681cbacd)] **parse:** lifecycle hooks
- [[`6ed1320`](https://github.com/flex-development/mark/commit/6ed132039a9739feb55d6e274bc48c2cd1300db6)] **parse:** migrate types from `@flex-development/fsm-tokenizer`
- [[`566fbcd`](https://github.com/flex-development/mark/commit/566fbcd8394301afc14115eee8377a560a6f1c84)] **parse:** re-export `Column`, `Line`, `Offset`

### :bug: Fixes

- [[`c3fc256`](https://github.com/flex-development/mark/commit/c3fc256412b45319108ebe8754543b8c1f3f1a47)] **ast:** [`Postprocess`] `Context` import
- [[`c24d82e`](https://github.com/flex-development/mark/commit/c24d82ecf9737459fa0ec335c6a17607b4268a80)] **ast:** export `Postprocess`
- [[`4f44837`](https://github.com/flex-development/mark/commit/4f448371fcc0ce0adba6e8ef45126a8eb56437ee)] **parse:** export `ParseOptions`

### :house_with_garden: Housekeeping

- [[`806260c`](https://github.com/flex-development/mark/commit/806260c470ed4bd642aec4ec314355ea2777a188)] fix release script
- [[`47237dd`](https://github.com/flex-development/mark/commit/47237ddab01ac33960488506655f354c0d67cbc3)] initial commit
- [[`d9c5f15`](https://github.com/flex-development/mark/commit/d9c5f1547889a94664ef544a5a5f725800d01ceb)] monorepo conversion
- [[`fcf6b4e`](https://github.com/flex-development/mark/commit/fcf6b4e16ca84d1065df1f3d87cb0f154afa3ce8)] update project architecture
- [[`f5d930d`](https://github.com/flex-development/mark/commit/f5d930da39ab3f851767a9c4c806df006fe85d18)] **github:** fix required status checks
- [[`0449cef`](https://github.com/flex-development/mark/commit/0449ceff03932d4275020718577effbb705f3471)] **github:** update repo topics
- [[`45ec5c6`](https://github.com/flex-development/mark/commit/45ec5c6cbb12d18abe0b1327a2d81b26d8bbb5b8)] **pkg:** `funding`

### :mechanical_arm: Refactors

- [[`c810342`](https://github.com/flex-development/mark/commit/c810342ac2debd92fec7b7ecc085b9efedcd3b76)] api improvements
- [[`6e9b4cc`](https://github.com/flex-development/mark/commit/6e9b4cc739a3e9ccef71165874a4d2f80bb6bf93)] project rename
- [[`920c7b5`](https://github.com/flex-development/mark/commit/920c7b585b06cb7910827e79dbb92f740276eb3f)] **ast:** [`Handles`] convert to mapped type
- [[`07ea6d4`](https://github.com/flex-development/mark/commit/07ea6d40eddd805681bf8c2089a4ccd42c2995c9)] **ast:** [`CompileContext`] remove `preprocess`
- [[`c314e54`](https://github.com/flex-development/mark/commit/c314e540194cc9046d81ff392c95000a9b1cc4d5)] **compile:** [`CompileValue`] exclude `undefined`
- [[`0540c6e`](https://github.com/flex-development/mark/commit/0540c6e6b722d70548a98a7ae56bd4987808d8c8)] **compile:** [`Handles`] convert to mapped type
- [[`4bb7cd3`](https://github.com/flex-development/mark/commit/4bb7cd34efd48e7d0e08edb7416c5d04bc305334)] **compile:** [`CompileContext`] remove `preprocess`
- [[`8367acc`](https://github.com/flex-development/mark/commit/8367acc2c962a576768d9202343ce8cac7259b6d)] **compile:** [`Preprocess`] allow `void` return
- [[`61654a2`](https://github.com/flex-development/mark/commit/61654a2a2fd37c17b493e7ef6f205bb094da8ffb)] **parse:** [`TokenFields`] remove default fields
- [[`aa50a55`](https://github.com/flex-development/mark/commit/aa50a55f501d92abd6ae3af770c6434594518080)] **parse:** `Skip` -> `ApplySkip`
- [[`4ae8fcc`](https://github.com/flex-development/mark/commit/4ae8fccc51152dbd6646fd9c271fab10ad6a059e)] **parse:** `TokenFactory` -> `CreateToken`
- [[`ffef271`](https://github.com/flex-development/mark/commit/ffef27128312c3d3885fb151d4a75942b539c7e3)] **parse:** api improvements
- [[`a0a5161`](https://github.com/flex-development/mark/commit/a0a5161ad240e24930c68a91b0e721c61d1f5f2a)] **parse:** forbid token type `null`
- [[`cde4845`](https://github.com/flex-development/mark/commit/cde4845c3550ee23279e61ff594962110c61713e)] **parse:** improvements
- [[`d742e57`](https://github.com/flex-development/mark/commit/d742e57367980a39ee3bb87583cb1f80b5eacf0f)] **parse:** move `Numeric` to `core`

## [3.1.0](https://github.com/flex-development/mark-util-symbol/compare/3.0.0...3.1.0) (2026-07-03)

### :package: Build

- [[`2f46050`](https://github.com/flex-development/mark-util-symbol/commit/2f46050f81791b41d86e41834a6a44eb0520f056)] **deps-dev:** Bump tsx from 4.22.4 to 4.22.5 ([#22](https://github.com/flex-development/mark-util-symbol/issues/22))

### :sparkles: Features

- [[`76af93f`](https://github.com/flex-development/mark-util-symbol/commit/76af93ff86239f7fba10847e66ffc17325e4d49b)] [`chars`] micromark superset

### :house_with_garden: Housekeeping

- [[`a9f5b11`](https://github.com/flex-development/mark-util-symbol/commit/a9f5b11c42885c2ef6b1e7c172482b6fced434c1)] **pkg:** `funding`

## [3.0.0](https://github.com/flex-development/mark-util-symbol/compare/2.0.0...3.0.0) (2026-07-01)

### ⚠ BREAKING CHANGES

- [`codes`] `bos`, `break`, `empty`, `sof`

### :package: Build

- [[`3c11fb0`](https://github.com/flex-development/mark-util-symbol/commit/3c11fb080b8cab5ab90c88224c9b18bd35ad6c10)] **deps-dev:** Bump the commitlint group with 2 updates ([#19](https://github.com/flex-development/mark-util-symbol/issues/19))

### :sparkles: Features

- [[`0c72f87`](https://github.com/flex-development/mark-util-symbol/commit/0c72f8715c9e5a1445178c18867632fb7b257363)] [`codes`] add micromark codes

### :wastebasket: Reverts

- [[`6343805`](https://github.com/flex-development/mark-util-symbol/commit/634380586843e56ac4089a127971604fc9841c0f)] [`codes`] `bos`, `break`, `empty`, `sof`

## [2.0.0](https://github.com/flex-development/mark-util-symbol/compare/1.1.0...2.0.0) (2026-06-30)

### ⚠ BREAKING CHANGES

- [`codes`] `bos`, `break`, `empty`, `sof`

### :package: Build

- [[`f02e028`](https://github.com/flex-development/mark-util-symbol/commit/f02e028a8bb3c11c104bfc4ce82e60043ec8aff0)] **deps-dev:** Bump @arethetypeswrong/cli from 0.18.3 to 0.18.4 ([#11](https://github.com/flex-development/mark-util-symbol/issues/11))
- [[`5ba5d1a`](https://github.com/flex-development/mark-util-symbol/commit/5ba5d1adf64c6f5f07ba676ba56f718c3ad4e1ed)] **deps-dev:** bump dprint from 0.54.0 to 0.55.1
- [[`0c8e7d0`](https://github.com/flex-development/mark-util-symbol/commit/0c8e7d07a9ea6694c443b6f556b9ec5accca2f6c)] **deps-dev:** Bump rollup from 4.62.0 to 4.62.2 ([#10](https://github.com/flex-development/mark-util-symbol/issues/10))
- [[`82ee5f8`](https://github.com/flex-development/mark-util-symbol/commit/82ee5f8961b6e3ff024f4e0630e40665bbb9a389)] **deps-dev:** Bump the commitlint group across 1 directory with 2 updates ([#13](https://github.com/flex-development/mark-util-symbol/issues/13))

### :robot: Continuous Integration

- [[`617fead`](https://github.com/flex-development/mark-util-symbol/commit/617feada0c63941c17c49e159bb6a2af789d2428)] **deps:** Bump actions/cache from 5.0.5 to 6.0.0 ([#12](https://github.com/flex-development/mark-util-symbol/issues/12))
- [[`ff99e70`](https://github.com/flex-development/mark-util-symbol/commit/ff99e70ee2f5ca7b0e111c80bd3fdd5feeb53c73)] **deps:** Bump actions/cache from 6.0.0 to 6.1.0 ([#14](https://github.com/flex-development/mark-util-symbol/issues/14))

### :mechanical_arm: Refactors

- [[`a76d00a`](https://github.com/flex-development/mark-util-symbol/commit/a76d00a80bfa1fad2feb75293c326b2547a99014)] [`codes`] `bos`, `break`, `empty`, `sof`

## [1.1.0](https://github.com/flex-development/mark-util-symbol/compare/1.0.1...1.1.0) (2026-06-21)

### :robot: Continuous Integration

- [[`35d1c9e`](https://github.com/flex-development/mark-util-symbol/commit/35d1c9e5a3c1f76995db82db2626bae9da8801cc)] **deps:** Bump actions/checkout from 6.0.3 to 7.0.0 ([#7](https://github.com/flex-development/mark-util-symbol/issues/7))

### :sparkles: Features

- [[`7857493`](https://github.com/flex-development/mark-util-symbol/commit/78574932ef112e9a8d2a182b4618243af1dac539)] **codes:** `bos`, `sof`

## [1.0.1](https://github.com/flex-development/mark-util-symbol/compare/1.0.0...1.0.1) (2026-06-18)

### :bug: Fixes

- [[`54eb69a`](https://github.com/flex-development/mark-util-symbol/commit/54eb69af91a2ee6735da2b99991d5137c17f2f6b)] [`ev`] use `as const`

## 1.0.0 (2026-06-18)

### :package: Build

- [[`b6cfed2`](https://github.com/flex-development/mark-util-symbol/commit/b6cfed2ddfb2d4ebeb29a8c6fae41c8db6257572)] codecov bundle analysis
- [[`fa9e3bc`](https://github.com/flex-development/mark-util-symbol/commit/fa9e3bce8a0520de276750b4fd70813d3df3c241)] **deps-dev:** Bump happy-dom from 20.10.5 to 20.10.6 ([#2](https://github.com/flex-development/mark-util-symbol/issues/2))

### :pencil: Documentation

- [[`df96352`](https://github.com/flex-development/mark-util-symbol/commit/df963526280a3acf926da3e11ecff93f4c5d5691)] use, api

### :sparkles: Features

- [[`c1b266b`](https://github.com/flex-development/mark-util-symbol/commit/c1b266b2fa32720cfec2a8457000ebdcfc27f6f0)] `chars`, `codes`
- [[`f4cf2da`](https://github.com/flex-development/mark-util-symbol/commit/f4cf2dab75824c35fb5fe4254ff49f313040f896)] `constants`, `ev`

### :house_with_garden: Housekeeping

- [[`27fc629`](https://github.com/flex-development/mark-util-symbol/commit/27fc62908d00e70aca43e1ea7058496071f16670)] initial commit
- [[`0c8331e`](https://github.com/flex-development/mark-util-symbol/commit/0c8331ef36941ef22baac7e0aacec1fb19d2af2f)] **github:** update repo description
- [[`0dbf963`](https://github.com/flex-development/mark-util-symbol/commit/0dbf963fd3cf9cb8f170442a960fce4e147e8114)] **pkg:** update package description

### :mechanical_arm: Refactors

- [[`4e6bfa1`](https://github.com/flex-development/mark-util-symbol/commit/4e6bfa1eba5ca91f7e41fbe351ea84b40962cf39)] project rename








