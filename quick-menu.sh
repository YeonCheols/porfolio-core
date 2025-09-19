#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPTS_DIR="$ROOT_DIR/scripts"

# Optionally load confirm() if available
if [ -f "$SCRIPTS_DIR/utils/confirm.sh" ]; then
    . "$SCRIPTS_DIR/utils/confirm.sh"
fi

derive_menu_name() {
    local file="$1"
    local base
    base="$(basename "$file")"

    case "$base" in
    publish-storybook.sh)
        if grep -qi 'storybook' "$file"; then
            echo "스토리북 테스트 서버 배포"
            return
        fi
        ;;
    publish-package.sh)
        if grep -qi 'changeset' "$file"; then
            echo "패키지 퍼블리시(Changesets)"
            return
        fi
        ;;
    create-component.sh)
        echo "UI 컴포넌트 생성"
        return
        ;;
    create-storybook.sh)
        echo "스토리북 컴포넌트 생성"
        return
        ;;
    update-package.sh)
        echo "패키지 의존성 업데이트"
        return
        ;;
    esac

    local first_comment
    first_comment="$(awk 'NR<=5 && $0 ~ /^#( |$)/ { sub(/^# ?/, "", $0); print; exit }' "$file")"
    if [ -n "$first_comment" ]; then
        echo "$first_comment"
        return
    fi

    # Fallback: Title-case the filename
    echo "$base" | sed 's/\.sh$//' | sed 's/-/ /g' | awk '{ for (i=1; i<=NF; i++) { $i=toupper(substr($i,1,1)) tolower(substr($i,2)) } print }'
}

files=()
for f in "$SCRIPTS_DIR"/*.sh; do
    case "$f" in
    "$SCRIPTS_DIR/utils/"*) continue ;;
    esac
    files+=("$f")
done

if [ ${#files[@]} -eq 0 ]; then
    echo "No scripts found in $SCRIPTS_DIR"
    exit 1
fi

menu_labels=()
menu_files=()
for f in "${files[@]}"; do
    label="$(derive_menu_name "$f")"
    menu_labels+=("$label")
    menu_files+=("$f")
done

# 컬러 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}실행할 스크립트를 선택하세요:${NC}"
for i in "${!menu_labels[@]}"; do
    printf "${GREEN}%2d)${NC} ${YELLOW}%s${NC}\n" $((i + 1)) "${menu_labels[$i]}"
done
echo -e " ${RED}q)${NC} 종료"
echo ""

# 숫자 입력 즉시 실행
while true; do
    read -n 1 -s choice
    echo ""
    
    if [[ "$choice" == "q" || "$choice" == "Q" ]]; then
        exit 0
    fi
    
    if [[ "$choice" =~ ^[0-9]+$ ]]; then
        idx=$((choice - 1))
        if [ "$idx" -ge 0 ] && [ "$idx" -lt "${#menu_files[@]}" ]; then
            break
        else
            echo "숫자를 다시 선택해주세요."
            continue
        fi
    else
        echo "숫자나 'q'를 입력해주세요."
        continue
    fi
done

target="${menu_files[$idx]}"
label="${menu_labels[$idx]}"

# create-component.sh는 자체적으로 대화형이므로 확인 생략
if [[ "$(basename "$target")" != "create-component.sh" && "$(basename "$target")" != "create-storybook.sh" ]]; then
    if declare -f confirm >/dev/null; then
        if ! confirm "[$label] 실행할까요?"; then
            echo "취소되었습니다."
            exit 0
        fi
    fi
fi

bash "$target"


