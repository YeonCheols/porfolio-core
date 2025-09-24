import type { Meta, StoryObj } from "@storybook/react";
import { Markdown, type MarkdownProps } from "@ui";
// eslint-disable-next-line import/no-relative-packages -- README.md 파일을 루트 디렉토리에서 직접 가져옴
import readmeContent from "../../../../README.md?raw";

const meta = {
  component: Markdown,
  argTypes: {},
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<MarkdownProps>;

export const Primary: Story = {
  render: (props: MarkdownProps) => {
    return (
      <div className="m-6">
        <Markdown {...props} />
      </div>
    );
  },
  name: "Markdown",
  args: {
    children: readmeContent,
  },
};
