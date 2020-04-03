#!/usr/bin/env node
const sade = require("sade");
const pkg = require("../../package");
const analyze = require("../analyze");

sade("complexity-report-html")
  .command("generate [dir]", "", {
    default: true,
  })
  .version(pkg.version)
  .describe("Generate a straightforward complexity report")
  .example("./src")
  .action(analyze)
  .parse(process.argv);
