import kurateh from "@kurateh/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist/"] },
  ...kurateh.configs.react,
  {
    rules: {
      "@kurateh/import-path": 1,
      "import/no-unresolved": 0,
    },
  },
];
