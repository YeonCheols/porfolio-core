import { resolve } from "path";
import { mergeConfig } from "vite";

const UI_PATH = resolve("../../packages/ui/src");

export default {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: true,
  },
  features: {
    buildStoriesJson: true,
  },
  async viteFinal(config) {
    return mergeConfig({
      ...config,
      define: {
        "process.env": {},
      },
      resolve: {
        alias: [
          {
            find: "@ui",
            replacement: UI_PATH,
          },
        ],
      },
    });
  },
};
