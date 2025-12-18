import type { ESLint } from "eslint";

import react from "./configs/react";
import recommended from "./configs/recommended";
import typescript from "./configs/typescript";
import rules from "./rules";

const plugin: ESLint.Plugin = {
  configs: {
    recommended,
    typescript,
    react,
  },
  rules,
};

export default plugin;
