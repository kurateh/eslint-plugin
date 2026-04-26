import kurateh from "@kurateh/eslint-plugin";
import globals from "globals";

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      "@kurateh": kurateh,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@kurateh/import-path": "warn",
    },
  },
];
