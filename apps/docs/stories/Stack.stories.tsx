import { Stack, StackProps } from '@ui';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<StackProps> = {
    component: Stack,
    title: 'Components/Stack',
    parameters: {
        docs: {
            description: {
                component: 'ADD_YOUR_DESCRIPTION',
            },
        },
    },
};

export default story;

export const Default: StoryObj<StackProps> = {
    args: {},
};
