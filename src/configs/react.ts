import { type Linter } from "eslint";
import react from "eslint-plugin-react";
import reactHook from "eslint-plugin-react-hooks";
import globals from "globals";

import typescript from "./typescript";

export default [
  ...typescript,
  react.configs.flat?.recommended ?? {},
  {
    plugins: { "react-hooks": reactHook },
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...reactHook.configs.recommended.rules,
      "react/react-in-jsx-scope": 0,
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-curly-brace-presence": [
        1,
        {
          props: "never",
          children: "never",
        },
      ],
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "react/display-name": 0,
    },
  },
] satisfies Linter.Config[];
