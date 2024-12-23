import js from "@eslint/js";
import type { Linter } from "eslint";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.es2017,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    ignores: ["node_modules/", "dist/", "build/", "coverage/"],
    rules: {
      // eslint
      "object-shorthand": 1,
      "no-unused-vars": [
        1,
        {
          ignoreRestSiblings: true,
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-param-reassign": [
        2,
        {
          props: true,
          ignorePropertyModificationsForRegex: ["^draft$", "Draft$"],
        },
      ],
      camelcase: [1, { allow: ["^\\w*_[A-Z]*$"] }],
      "no-var": 2,

      // prettier
      "prettier/prettier": [
        1,
        {
          trailingComma: "all",
          tabWidth: 2,
          semi: true,
          singleQuote: false,
          endOfLine: "auto",
        },
        {
          usePrettierrc: false,
        },
      ],

      // import
      "import/no-unresolved": 0,
      "import/no-extraneous-dependencies": [
        2,
        {
          devDependencies: [
            "**/*.test.*",
            "**/*.stories.*",
            "**/*.config.*",
            "**/*.spec.*",
          ],
        },
      ],
      "import/order": [
        1,
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            {
              pattern: "~*/**",
              group: "internal",
            },
            {
              pattern: "@*/**",
              group: "internal",
            },
          ],
        },
      ],

      // unused-imports
      "unused-imports/no-unused-imports": 2,
    },
  },
] satisfies Linter.Config[];
