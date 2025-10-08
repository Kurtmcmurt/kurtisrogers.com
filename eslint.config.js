import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/dev/*',
      '**/dist/*',
      '**/tests/*',
      'tsconfig.json',
      '**/.storybook/*',
      '**/storybook-static/*',
    ]
  },
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    "rules": {
      "no-console": "error",
    },
  },
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
];