const js = require("@eslint/js");
const ts = require("typescript-eslint");
const ng = require("@angular-eslint/eslint-plugin");
const ngTpl = require("@angular-eslint/eslint-plugin-template");
const tplParser = require("@angular-eslint/template-parser");
const globals = require("globals");

module.exports = [
  { ignores: ["dist/**", "coverage/**", "node_modules/**", "src/index.html"] },

  js.configs.recommended,

  // Código TS Angular
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: ts.parser,
      globals: { ...globals.browser }, // <-- añade 'console', window, etc.
    },
    plugins: {
      "@typescript-eslint": ts.plugin,
      "@angular-eslint": ng,
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...ts.configs.stylistic.rules,
      ...ng.configs.recommended.rules,
      "no-undef": "off", // TS ya valida esto, evita falsos positivos
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
    },
  },

  // Tests (.spec.ts)
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      parser: ts.parser,
      globals: { ...globals.jasmine }, // describe, it, expect, beforeEach, etc.
    },
    rules: {
      "no-undef": "off",
    },
  },

  // Templates HTML
  {
    files: ["src/app/**/*.html"],
    languageOptions: { parser: tplParser },
    plugins: { "@angular-eslint/template": ngTpl },
    rules: {
      ...ngTpl.configs.recommended.rules,
      ...ngTpl.configs.accessibility.rules,
    },
  },
  {
    files: ["karma.conf.js", "eslint.config.cjs"],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
