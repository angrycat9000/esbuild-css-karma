"use strict";

const cssModulesPlugin = require("esbuild-css-modules-plugin");

module.exports = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  outdir: "build",
  sourcemap: true,
  plugins: [cssModulesPlugin({ v2: true, inject: "#styles" })],
};
