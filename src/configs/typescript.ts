import { type Linter } from "eslint";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

import rules from "../rules";
import recommended from "./recommended";

export default [
  ...recommended,
  // eslint-disable-next-line import/no-named-as-default-member
  ...(tseslint.configs.recommended as Linter.Config[]),
  importPlugin.flatConfigs.typescript,
  {
    // ESLint config block에 file이 있으면 해당 파일을 검사할 차례가 와서야 plugin이 적용됨
    // 따라서 이 Plugin을 끄려면 Config File에서 file: "~~"을 넣어야 됨
    // 이 과정을 없애기 위해 plugin 적용을 앞서 진행
    plugins: {
      "@kurateh": { rules, meta: { name: "@kurateh" } },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

          // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

          // use <root>/path/to/folder/tsconfig.json
          project: "tsconfig.json",

          // Multiple tsconfigs (Useful for monorepos)

          // use a glob pattern
          // project: "packages/*/tsconfig.json",

          // use an array
          // project: [
          //   "packages/module-a/tsconfig.json",
          //   "packages/module-b/tsconfig.json"
          // ],

          // use an array of glob patterns
          // project: [
          //   "packages/*/tsconfig.json",
          //   "other-packages/*/
        },
      },
    },
    rules: {
      // eslint
      "@kurateh/import-path": 1,
      "object-shorthand": 1,
      "no-unused-vars": 0,
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          ignoreRestSiblings: true,
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        1,
        {
          fixStyle: "inline-type-imports",
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
      "import-plugin/no-unresolved": 0,
    },
  },
] satisfies Linter.Config[];
