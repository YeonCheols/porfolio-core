#!/bin/bash
read -rp 'Name of component: ' name
# Use the component name as entered (no capitalization)
component_name="$name"
styled_name=$(echo "$component_name" | perl -pe 's/([a-z0-9])([A-Z])/$1-\L$2/g' | perl -ne 'print lc')

story_dir='apps/docs/stories'
ui_dir="packages/ui/src/components/$component_name"

mkdir "$ui_dir"
# printf ".%s {\n}" "$styled_name" >>"$ui_dir/index.module.scss"
echo "import { cn } from '../../utils/merge';

export interface ${component_name}Props {}

function $component_name({}: ${component_name}Props) {
    return <div className={cn()}></div>;
}

export default $component_name
" >>"$ui_dir/index.tsx"
echo "import type { Meta, StoryObj } from '@storybook/react';
import { $component_name, ${component_name}Props } from '@ui';

const meta = {
  component: $component_name,
  argTypes: {},
} satisfies Meta<typeof $component_name>;

export default meta;

type Story = StoryObj<${component_name}Props>;

export const Primary: Story = {
  render: (props: ${component_name}Props) => <$component_name {...props} />,
  name: '$component_name',
  args: {},
};

found=0
next_component=''
for file in packages/ui/src/components*; do
    if [[ "$found" -eq 1 ]]; then
        next_component=${file:11}
        break
    fi

    if [ "$file" = "packages/ui/src/components/$component_name" ]; then
        found=1
    fi
done

regex="export \* from './$next_component';"
export_all="export * from './$component_name';"
export_default="export { default as $component_name } from './$component_name';"
barrel_file='packages/ui/src/components/index.ts'

if grep -q "$regex" "$barrel_file"; then
    sed -i '' "s#$regex#$export_all\n$export_default\n$regex#g" "$barrel_file"
else
    printf "%s\n%s\n" "$export_all" "$export_default" >>"$barrel_file"
fi
