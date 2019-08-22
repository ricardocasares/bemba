#!/usr/bin/env bash
ts-node-dev -r tsconfig-paths/register --no-notify --transpile-only --respawn --project ./tsconfig.gen.json ./src/schema/generate.ts