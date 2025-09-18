/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@yeoncheols/portfolio-core-esconfig/react.js')],
  parserOptions: {
    project: './tsconfig.json', // 또는 경로가 다르면 'relative/path/to/tsconfig.json'
    tsconfigRootDir: __dirname,
  },
};
