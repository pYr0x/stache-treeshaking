const stealTools = require("steal-tools");
const fs = require("fs-extra");


fs.removeSync("./dist");

const buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm",
  // main: "~/app"
}, {
  minify: false,
  treeShaking: true
});