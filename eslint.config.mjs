/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist/"] },
  // ...kurateh.configs.react,
  {
    rules: {
      "@kurateh/import-path": 0,
    },
  },
];
