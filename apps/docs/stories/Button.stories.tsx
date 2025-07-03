import type { Meta, StoryObj } from "@storybook/react";
import { BasicButton, BasicButtonProps } from "@ui";

const meta = {
  component: BasicButton,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
} satisfies Meta<typeof BasicButton>;

export default meta;

type Story = StoryObj<BasicButtonProps>;

export const Primary: Story = {
  render: (props) => (
    <BasicButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello
    </BasicButton>
  ),
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};
