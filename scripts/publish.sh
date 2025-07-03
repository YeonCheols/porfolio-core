#!/bin/bash

if [ -n "$(git status --porcelain)" ]; then
    echo 'Unclean working tree'
    exit 1
fi

pnpm changeset || exit 1
pnpm changeset version || exit 1

diff=$(git diff --name-only)

IFS=$'\n'

for line in $diff; do
    if [[ "$line" =~ ^((apps|packages)\/([a-zA-Z\-]+))\/package.json$ ]]; then
        name=$(grep <"$line" -o '"name": "[^"]*' | grep -o '[^"]*$')

        git add "${BASH_REMATCH[1]}*"
        git commit -m "Update version of $name"
        pnpm build --filter "$name"
        pnpm publish --filter "$name" --no-git-checks
    fi
done
