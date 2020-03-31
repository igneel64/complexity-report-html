const path = require("path");
const fsPromise = require("fs").promises;
const promisify = require("util").promisify;
const globPromise = promisify(require("glob"));
const complexityReporter = require("./metrics/complexity");
const eslintReporter = require("./metrics/eslint");
const writeToTemplate = require("./util/templateWriter");
const BASE_DIR = path.resolve(process.cwd(), "src/");

module.exports = async function analyze(givenDirectory = BASE_DIR) {
  const filesDir = path.resolve(process.cwd(), givenDirectory);
  const jsFilesToAnalyze = await globPromise("**/*.js", {
    cwd: filesDir
  });

  const results = await Promise.all(
    jsFilesToAnalyze.map(async file => {
      const source = await fsPromise.readFile(
        path.resolve(filesDir, file),
        "utf-8"
      );
      const complexityResults = await complexityReporter(source);
      const violations = eslintReporter(source);

      return {
        ...complexityResults,
        violations,
        file
      };
    })
  );

  writeToTemplate(results);
  // console.log(results);
};
