import { resolve } from "path";
import { mergeConfig } from "vite";

const UI_PATH = resolve("../../packages/ui/src");

export default {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
  ],
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
          {
            find: "@",
            replacement: UI_PATH,
          },
          {
            find: "@/utils",
            replacement: resolve(UI_PATH, "utils"),
          },
          {
            find: "@/primitives",
            replacement: resolve(UI_PATH, "ui-primitives"),
          },
          {
            find: "@/components",
            replacement: resolve(UI_PATH, "ui-components"),
          },
          {
            find: "@/types",
            replacement: resolve(UI_PATH, "types"),
          },
          {
            find: "@/hooks",
            replacement: resolve(UI_PATH, "hooks"),
          },
          {
            find: "@/constant",
            replacement: resolve(UI_PATH, "constant"),
          },
          {
            find: "@/store",
            replacement: resolve(UI_PATH, "store"),
          },
        ],
      },
    });
  },
};
