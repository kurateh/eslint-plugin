import kurateh from "@kurateh/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/**", "node_modules/**", "sample-project/**", "sample/**"],
  },
  {
    settings: {
      react: {
        version: "19.0", // Explicit version to bypass 'detect' bug in ESLint 10
      },
    },
    rules: {
      "react/display-name": 0,
      "react/prop-types": 0,
      "prettier/prettier": [
        1,
        {
          usePrettierrc: true,
        },
      ],
    },
  },
  ...kurateh.configs.react,
  {
    files: ["tests/**", "**/*.test.ts"],
    rules: {
      "import/no-extraneous-dependencies": 0,
      "@typescript-eslint/consistent-type-imports": 0,
    },
  },
  {
    rules: {
      "@kurateh/import-path": 1,
      "import/no-unresolved": 0,
      "import/order": 0,
      "unused-imports/no-unused-imports": 0,
    },
  },
];
