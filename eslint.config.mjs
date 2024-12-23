import kurateh from "@kurateh/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist/"] },
  ...kurateh.configs.typescript,
  {
    rules: {
      "@kurateh/import-path": 0,
    },
  },
];
