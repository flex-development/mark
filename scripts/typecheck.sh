#!/bin/sh

set -e

# Local Typecheck Workflow
#
# References:
#
# - https://www.typescriptlang.org/docs/handbook/compiler-options.html

echo $npm_package_name@$npm_package_version
echo $INIT_CWD
tsc -p $INIT_CWD/tsconfig.json
