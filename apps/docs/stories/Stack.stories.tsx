import type { Meta, StoryObj } from "@storybook/react";
import { StackIcon, StackIconProps } from "@ui";

const meta = {
  component: StackIcon,
  argTypes: {},
} satisfies Meta<typeof StackIcon>;

export default meta;

type Story = StoryObj<StackIconProps>;

export const Primary: Story = {
  render: (props: StackIconProps) => <StackIcon {...props} />,
  name: "StackIcon",
  args: {
    icon: "SiReact",
    name: "React",
    color: "text-sky-500",
    size: 20,
  },
};
