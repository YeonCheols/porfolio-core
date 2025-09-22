import type { Meta, StoryObj } from "@storybook/react";
import { ProjectLink, type ProjectLinkProps } from "@ui";

const meta = {
  component: ProjectLink,
  argTypes: {},
} satisfies Meta<typeof ProjectLink>;

export default meta;

type Story = StoryObj<ProjectLinkProps>;

export const Primary: Story = {
  render: (props: ProjectLinkProps) => <ProjectLink {...props} />,
  name: "ProjectLink",
  args: {
    linkGithub: "https://github.com",
    linkDemo: "#",
  },
};
