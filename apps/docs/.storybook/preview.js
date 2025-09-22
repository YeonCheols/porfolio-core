import "../global.css";

export const decorators = [
  (Story, context) => {
    const { backgrounds } = context.globals;

    if (backgrounds === null) {
      document.documentElement.className = "dark";
    }
    if (backgrounds?.value) {
      document.documentElement.className = backgrounds.value;
    }

    return Story();
  },
];

export const parameters = {
  layout: "centered",
  docs: {
    source: {
      type: "code",
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      { name: "light", value: "light" },
      { name: "dark", value: "dark" },
    ],
  },
};
