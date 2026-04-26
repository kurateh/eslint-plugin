import type { ESLint } from "eslint";
import {readFileSync} from "node:fs";

import react from "./configs/react";
import recommended from "./configs/recommended";
import rules from "./rules";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf-8"));

const plugin: ESLint.Plugin = {
  meta: {
    name: "eslint-plugin",
    namespace: "@kurateh",
  },
  configs: {
    recommended,
    react,
  },
  rules,
} satisfies ESLint.Plugin;

export default plugin;
