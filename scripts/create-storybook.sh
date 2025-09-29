#!/bin/bash

# 컬러 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 스토리북 파일 입력
read -rp '컴포넌트 이름을 입력해주세요: ' name

# 폴더 경로 입력
read -rp '폴더 경로를 입력해주세요 (선택사항, 예: common, project, stack): ' folder_path

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

# 기본 스토리 디렉토리
base_story_dir='apps/docs/stories'

# 폴더 경로가 입력된 경우 처리
if [[ -n "$folder_path" ]]; then
    # 폴더 경로 정리 (앞뒤 공백 제거, 슬래시 정리)
    folder_path=$(echo "$folder_path" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | sed 's|^/||;s|/$||')
    
    # 전체 스토리 디렉토리 경로 생성
    story_dir="$base_story_dir/$folder_path"
    
    # 폴더가 존재하지 않으면 생성
    if [[ ! -d "$story_dir" ]]; then
        echo "📁 새 폴더를 생성합니다: $story_dir"
        mkdir -p "$story_dir"
    else
        echo "📁 기존 폴더를 사용합니다: $story_dir"
    fi
else
    # 폴더 경로가 없으면 루트 경로 사용
    story_dir="$base_story_dir"
    echo "📁 루트 경로를 사용합니다: $story_dir"
fi

# Storybook 파일 생성
echo "import type { Meta, StoryObj } from '@storybook/react';
import { ${pascal_name}, type ${pascal_name}Props } from '@ui';

const meta = {
  component: ${pascal_name},
  title: '${folder_path}/${pascal_name}',
  argTypes: {},
} satisfies Meta<typeof ${pascal_name}>;

export default meta;

type Story = StoryObj<${pascal_name}Props>;

export const Primary: Story = {
  render: (props: ${pascal_name}Props) => <${pascal_name} {...props} />,
  name: '${pascal_name}',
  args: {},
};
" > "$story_dir/${component_name}.stories.tsx"

echo "✅ 스토리북 파일이 성공적으로 생성되었습니다!"
echo "📚 위치: $story_dir/${component_name}.stories.tsx"
