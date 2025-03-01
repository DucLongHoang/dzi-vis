const eslintPluginAstro = require("eslint-plugin-astro");
module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"], // In CommonJS, the `flat/` prefix is required.
  {
    ignores: [".astro/**", ".netlify/**", "dist/**", "node_modules/**"],
    rules: {
      "no-unused-vars": "warn", // Explicitly enable this rule
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
