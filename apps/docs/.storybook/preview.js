import "../global.css";

// 테마 설정을 위한 class 주입
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
