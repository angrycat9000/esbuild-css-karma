"use strict";

const esBuildConfig = require("./esbuild.config.js");

module.exports = function (config) {
  config.set({
    basePath: ".",
    frameworks: ["jasmine"],
    files: ["tests/**/*.ts"],
    exclude: [],
    preprocessors: {
      "tests/**/*.ts": ["esbuild"],
    },
    esbuild: esBuildConfig,
    reporters: ["progress"],
    port: 9877,
    autoWatch: true
  });
};
