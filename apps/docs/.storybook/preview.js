import "../global.css";

// 테마 관리 함수
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("storybook-theme", theme);

  // 배경색 동기화
  const backgroundValue = theme === "dark" ? "#121212" : "#ffffff";
  document.documentElement.style.setProperty(
    "--storybook-background",
    backgroundValue
  );
};

// 초기 테마 설정
const savedTheme = localStorage.getItem("storybook-theme") || "dark";
setTheme(savedTheme);

// 테마 변경 이벤트 리스너
window.addEventListener("message", (event) => {
  if (event.data.type === "storybook-theme-change") {
    setTheme(event.data.theme);
  }
});

export const parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      { name: "light", value: "#fafafa" },
      { name: "dark", value: "#121212" },
    ],
  },
};
