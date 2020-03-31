const sade = require("sade");
const pkg = require("../../package");
const fileProcessing = require("../processing");

sade("cmp-rep")
  .command("generate [dir]", "", {
    default: true
  })
  .version(pkg.version)
  .describe("Generate a straightforward complexity report")
  .example("./src")
  .action(fileProcessing)
  .parse(process.argv);
