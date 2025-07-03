const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  plugins: ["only-warn"],
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  // add rules configurations here
  rules: {
    "max-len": [
      "error",
      {
        code: 150,
      },
    ],
    "prefer-const": "off",
    "no-alert": "off",
    "no-prototype-builtins": "off",
    "no-case-declarations": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": 0,
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/self-closing-comp": "off",
    indent: "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-anonymous-default-export": "off",
    "object-curly-newline": "off",
    "jsx-a11y/role-supports-aria-props": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "function-paren-newline": "off",
    "no-confusing-arrow": "off",
    "no-use-before-define": "off",
    "no-restricted-globals": "off",
    "no-unused-vars": "off",
    "linebreak-style": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-unsafe-return": "off",
  },
};
