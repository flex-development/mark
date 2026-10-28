#!/bin/sh

set -e

# Local Typecheck Workflow
#
# References:
#
# - https://www.typescriptlang.org/docs/handbook/compiler-options.html

tsc -p $INIT_CWD/$([[ -f tsconfig.root.json ]] && echo tsconfig.root.json || echo tsconfig.json)
