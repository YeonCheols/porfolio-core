import type { Meta, StoryObj } from "@storybook/react";
import { StackTag, type StackTagProps } from "@ui";

const meta = {
  component: StackTag,
  argTypes: {},
} satisfies Meta<typeof StackTag>;

export default meta;

type Story = StoryObj<StackTagProps>;

export const Primary: Story = {
  render: (props: StackTagProps) => <StackTag {...props} />,
  name: "StackTag",
  args: {
    icon: "SiReact",
    name: "React",
    color: "text-sky-500",
    size: 20,
    showName: true,
  },
};
