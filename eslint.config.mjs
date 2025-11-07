import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      /*...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,*/
      ...tsPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      "no-console": "error",
      "react/jsx-key": "error",
      "no-trailing-spaces": "error",
      "prefer-const": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true, allowShortCircuit: true }],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
      react: {
        version: "detect",
      },
    },
  }
);
