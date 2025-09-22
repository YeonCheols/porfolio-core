#!/bin/bash

# 컬러 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 폴더 타입 선택
echo -e "${BLUE}컴포넌트 타입을 선택하세요:${NC}"
echo -e "${GREEN}1)${NC} ${YELLOW}ui-components${NC}"
echo -e "${GREEN}2)${NC} ${YELLOW}ui-primitives${NC}"
read -n 1 -rp "" folder_choice
echo ""

case $folder_choice in
    1)
        folder_type="ui-components"
        ;;
    2)
        folder_type="ui-primitives"
        ;;
    *)
        echo "1 또는 2번을 입력하세요."
        exit 1
        ;;
esac

# 컴포넌트 이름 입력 (kebab-case 권장)
read -rp '컴포넌트 이름 (kebab-case 권장, 예: my-component): ' name

# kebab-case 검증 및 변환
if [[ "$name" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
    component_name="$name"
else
    echo "경고: kebab-case 형식이 아닙니다. 자동으로 변환합니다."
    # PascalCase나 camelCase를 kebab-case로 변환
    component_name=$(echo "$name" | perl -pe 's/([a-z0-9])([A-Z])/$1-\L$2/g' | perl -ne 'print lc')
    echo "변환된 이름: $component_name"
fi

# PascalCase 컴포넌트 이름 생성 (React 컴포넌트용)
pascal_name=$(echo "$component_name" | perl -pe 's/(^|-)([a-z])/\U$2/g')

ui_dir="packages/ui/src/$folder_type/$component_name"

# 디렉토리 생성
mkdir -p "$ui_dir"

# 컴포넌트 파일 생성
echo "import { cn } from '@/utils';

export interface ${pascal_name}Props {}

function ${pascal_name}({}: ${pascal_name}Props) {
    return <div className={cn()}></div>;
}

export default ${pascal_name}
" > "$ui_dir/index.tsx"

# barrel 파일 업데이트
barrel_file="packages/ui/src/$folder_type/index.ts"

# export 문 생성
export_all="export * from './$component_name';"
export_default="export { default as $pascal_name } from './$component_name';"

# barrel 파일에 추가
if [ -f "$barrel_file" ]; then
    # 파일이 존재하는 경우, 마지막에 추가
    echo "" >> "$barrel_file"
    echo "$export_all" >> "$barrel_file"
    echo "$export_default" >> "$barrel_file"
else
    # 파일이 존재하지 않는 경우, 새로 생성
    echo "$export_all" > "$barrel_file"
    echo "$export_default" >> "$barrel_file"
fi

echo "✅ 컴포넌트가 성공적으로 생성되었습니다!"
echo "📁 위치: $ui_dir"
echo "📝 컴포넌트: $pascal_name"
