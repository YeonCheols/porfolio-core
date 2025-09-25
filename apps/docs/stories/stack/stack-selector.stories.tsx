import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { StackSelector, type StackSelectorProps, type StackType } from "@ui";

const meta = {
  component: StackSelector,
  title: "Stack/StackSelector",
  argTypes: {},
} satisfies Meta<typeof StackSelector>;

export default meta;

type Story = StoryObj<StackSelectorProps<StackType>>;

export const Primary: Story = {
  render: (props: StackSelectorProps<StackType>) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <StackSelector {...props} />
      </FormProvider>
    );
  },
  args: {
    name: "StackSelector",
    stacks: [
      {
        id: 33,
        name: "Scss",
        icon: "FaSass",
        color: "text-pink-500",
      },
      {
        id: 32,
        name: "Jquery",
        icon: "SiJquery",
        color: "text-blue-500",
      },
      {
        id: 30,
        name: "Socket",
        icon: "SiSocketdotio",
        color: "",
      },
      {
        id: 29,
        name: "CSS",
        icon: "SiCss3",
        color: "text-blue-300",
      },
      {
        id: 28,
        name: "Storybook",
        icon: "SiStorybook",
        color: "text-amber-500",
      },
      {
        id: 27,
        name: "Jest",
        icon: "SiJest",
        color: "text-red-600",
      },
      {
        id: 26,
        name: "Nginx",
        icon: "SiNginx",
        color: "text-green-500",
      },
      {
        id: 25,
        name: "PWA",
        icon: "SiPwa",
        color: "text-amber-600",
      },
      {
        id: 24,
        name: "Styled Components",
        icon: "SiStyledcomponents",
        color: "text-pink-500",
      },
      {
        id: 23,
        name: "Webpack",
        icon: "SiWebpack",
        color: "text-blue-500",
      },
      {
        id: 22,
        name: "Redux",
        icon: "SiRedux",
        color: "text-purple-500",
      },
      {
        id: 21,
        name: "Gatsby",
        icon: "SiGatsby",
        color: "text-purple-600",
      },
      {
        id: 20,
        name: "Node.js",
        icon: "SiNodedotjs",
        color: "text-green-600",
      },
      {
        id: 19,
        name: "Nuxt.js",
        icon: "SiNuxtdotjs",
        color: "text-green-400",
      },
      {
        id: 18,
        name: "Vue.js",
        icon: "SiVuedotjs",
        color: "text-green-500",
      },
      {
        id: 17,
        name: "Angular",
        icon: "SiAngular",
        color: "text-red-500",
      },
      {
        id: 16,
        name: "Artificial Intelligence",
        icon: "BsRobot",
        color: "text-rose-500",
      },
      {
        id: 15,
        name: "Firebase",
        icon: "SiFirebase",
        color: "text-yellow-500",
      },
      {
        id: 14,
        name: "Prisma",
        icon: "SiPrisma",
        color: "text-emerald-500",
      },
      {
        id: 13,
        name: "Vite",
        icon: "SiVite",
        color: "text-purple-500",
      },
      {
        id: 12,
        name: "Material UI",
        icon: "SiMui",
        color: "text-sky-400",
      },
      {
        id: 10,
        name: "WordPress",
        icon: "SiWordpress",
        color: "",
      },
      {
        id: 9,
        name: "Apollo",
        icon: "SiApollographql",
        color: "",
      },
      {
        id: 8,
        name: "GraphQL",
        icon: "SiGraphql",
        color: "text-pink-600",
      },
      {
        id: 7,
        name: "Bootstrap",
        icon: "BsFillBootstrapFill",
        color: "text-purple-500",
      },
      {
        id: 6,
        name: "TailwindCSS",
        icon: "SiTailwindcss",
        color: "text-cyan-300",
      },
      {
        id: 5,
        name: "React.js",
        icon: "SiReact",
        color: "text-sky-500",
      },
      {
        id: 4,
        name: "Next.js",
        icon: "SiNextdotjs",
        color: "",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "SiTypescript",
        color: "text-blue-400",
      },
      {
        id: 2,
        name: "JavaScript",
        icon: "SiJavascript",
        color: "text-yellow-400",
      },
    ],
    placeholder: "기술 스택을 입력해주세요.",
    maxStacks: 8,
  },
};
