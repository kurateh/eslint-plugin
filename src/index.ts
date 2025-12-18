import type { ESLint } from "eslint";

import react from "./configs/react";
import recommended from "./configs/recommended";
import rules from "./rules";

const plugin: ESLint.Plugin = {
  configs: {
    recommended,
    react,
  },
  rules,
};

export default plugin;
