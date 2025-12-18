import type { ESLint } from "eslint";

import react from "./configs/react";
import recommended from "./configs/recommended";
import rules from "./rules";

const plugin = {
  configs: {
    recommended,
    react,
  },
  rules,
} satisfies ESLint.Plugin;

export default plugin;
