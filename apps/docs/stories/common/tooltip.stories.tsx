import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, type TooltipProps } from '@ui';

const meta = {
  component: Tooltip,
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<TooltipProps>;

export const Primary: Story = {
  render: (props: TooltipProps) => <Tooltip {...props} />,
  name: 'Tooltip',
  args: {},
};

