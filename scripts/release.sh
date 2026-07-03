#!/bin/sh

set -e

# Local Release Workflow
#
# 1. run typecheck
# 2. pack project and analyze types
# 3. run postbuild typecheck
# 4. create release chore commit
#
# References:
#
# - https://git-scm.com/docs/git-commit
# - https://github.com/flex-development/grease
# - https://jqlang.github.io

yarn typecheck
attw --pack
yarn check:types:build
git commit --allow-empty -S -s -m "release(chore): $(jq .version -r <<<$(grease bump -j $@))"
