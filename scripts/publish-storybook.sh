#!/bin/bash
# Script for deploying storybook to test server

. scripts/utils/confirm.sh

current_branch=$(git rev-parse --abbrev-ref HEAD)
git pull origin "$current_branch" || exit 1


pnpm build --filter=@yeoncheols/portfolio-core-docs

if confirm 'GitHub Pages에 배포하시겠습니까?'; then
    echo "GitHub Actions 워크플로를 실행합니다..."
    if command -v gh &> /dev/null; then
        gh workflow run "storybook-publish.yml" --ref master
        echo "GitHub Actions 워크플로가 실행되었습니다. 진행 상황: https://github.com/YeonCheols/porfolio-core/actions"
    else
        echo "GitHub CLI (gh)가 설치되어 있지 않습니다. 다음 명령어로 설치하세요:"
        echo "  brew install gh"
        echo "  gh auth login"
    fi
fi

