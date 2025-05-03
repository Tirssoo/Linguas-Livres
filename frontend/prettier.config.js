/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginConfig} */
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  trailingComma: "all",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["baseClass", "cn"],
};
