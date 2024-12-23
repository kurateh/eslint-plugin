import type { ESLint } from "eslint";

import recommended from "./configs/recommended";
import typescript from "./configs/typescript";
import rules from "./rules";

export default {
  configs: {
    recommended,
    typescript,
  },
  rules,
} satisfies ESLint.Plugin;
