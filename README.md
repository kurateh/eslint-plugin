# @kurateh/eslint-plugin

English | [한국어](./README.ko.md)

An ESLint plugin containing personal ESLint rules and recommended configurations.

## Requirements
- **NodeJS**: >=22
- **ESLint**: >= 9 (Flat Config only)
- **TypeScript**: >= 5.7.2

## 1. Usage

### Installation
```bash
pnpm add -D @kurateh/eslint-plugin
# or
npm install --save-dev @kurateh/eslint-plugin
```

### ESLint Configuration (`eslint.config.mjs`)
This plugin supports ESLint Flat Config. You can add configurations as follows:

```javascript
import kuratehPlugin from "@kurateh/eslint-plugin";

export default [
  // Apply recommended configuration
  kuratehPlugin.configs.recommended,
  
  // Apply additional configuration for React environments
  kuratehPlugin.configs.react,
  
  {
    plugins: {
      "@kurateh": kuratehPlugin,
    },
    rules: {
      // Customize specific rules if needed
      "@kurateh/import-path": "error",
    },
  },
];
```

### Provided Configurations
- `configs.recommended`: Recommended configuration for general TypeScript projects (includes Prettier).
- `configs.react`: Additional configuration for React projects (includes React Hooks rules).

## 2. Deployment via GitHub Actions

This project is automatically deployed to the NPM registry via GitHub Actions.

### Deployment Process
1.  **Update CHANGELOG.md**: Before deployment, record the changes for the new version under the `## [Unreleased]` section in `CHANGELOG.md`.
    *   **Writing Example**:
        ```markdown
        ## [Unreleased]
        ### Added
        - New rule `@kurateh/new-rule`
        ### Fixed
        - Fixed false positive in `import-path` rule
        ```
2.  Go to the **Actions** tab of the GitHub repository.
3.  Select **Release package** from the workflow list on the left.
4.  Click the **Run workflow** button.
5.  Select or enter one of the following options:
    - **Release type**: Select one of `patch`, `minor`, `major` to bump the version.
    - **Custom version (Optional)**: Enter a specific version to deploy immediately (e.g., `10.0.0`). If provided, `Release type` is ignored.
6.  Click **Run workflow** to trigger the following automated steps:
    - Run build and tests.
    - Update the `[Unreleased]` section in `CHANGELOG.md` to the new version number.
    - Update the version in `package.json`, commit changes, and create a tag.
    - Publish to NPM and create a GitHub Release (Changelog content will be used as Release notes).

---
**Note**: `NPMJS_ACCESS_TOKEN` must be registered in GitHub Secrets for successful deployment.
