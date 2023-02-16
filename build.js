const esbuild = require("esbuild");
const config = require("./esbuild.config.js");

async function main() {
  await esbuild.build(config);
}

main();
