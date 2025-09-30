import type { Meta, StoryObj } from "@storybook/react";
import { type CodeProps } from "react-markdown/lib/ast-to-react";
// import { CodeBlock } from "@ui";
import { CodeBlock } from "@yeoncheols/portfolio-core-ui";

const meta = {
  component: CodeBlock,
  title: "Common/CodeBlock",
  argTypes: {},
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<CodeProps>;

export const Primary: Story = {
  render: (props: CodeProps) => <CodeBlock {...props} />,
  name: "CodeBlock",
  args: {
    children: [
      "git clone https://github.com/your-username/portfolio-admin.git\ncd portfolio-admin\n",
    ],
    className: "language-typescript",
    inline: false,
  },
};
