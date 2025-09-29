import type { Meta, StoryObj } from "@storybook/react";
import { Image, type ImageProps } from "@ui";

const meta = {
  component: Image,
  title: "Common/Image",
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<ImageProps>;

export const Primary: Story = {
  render: (props: ImageProps) => <Image {...props} />,
  name: "Image",
  args: {
    src: "https://ywlmykjlvcpfabodffof.supabase.co/storage/v1/object/public/portfolio-img/main/portfolio.webp",
    alt: "portfolio",
    width: 800,
    height: 400,
    loading: "lazy",
    className: "hover:scale-105",
    rounded: "rounded-lg",
  },
};
