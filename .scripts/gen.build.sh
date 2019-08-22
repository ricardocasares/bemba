#!/usr/bin/env bash
ts-node -r tsconfig-paths/register --transpile-only --project ./tsconfig.gen.json ./src/schema/generate.ts