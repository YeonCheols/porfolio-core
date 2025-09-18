#!/bin/bash
# Script for deploying storybook to test server

. scripts/utils/confirm.sh

current_branch=$(git rev-parse --abbrev-ref HEAD)
git pull origin "$current_branch" || exit 1

if confirm 'Install packages?'; then
    pnpm install --frozen-lockfile
fi

pnpm build --filter=docs
pm2 restart storybook
