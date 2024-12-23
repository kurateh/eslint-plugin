import type { ESLint } from "eslint";

import react from "./configs/react";
import recommended from "./configs/recommended";
import typescript from "./configs/typescript";
import rules from "./rules";

export default {
  configs: {
    recommended,
    typescript,
    react,
  },
  rules,
} satisfies ESLint.Plugin;
