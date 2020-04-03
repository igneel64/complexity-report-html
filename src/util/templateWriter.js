const fs = require("fs");
const path = require("path");
const TEMPLATE_PATH = path.resolve(__dirname, "../../build/out/index.html");
const OUT_PATH = path.resolve(process.cwd(), ".complexity-report");

module.exports = function (reportResults) {
  if (!fs.existsSync(OUT_PATH)) {
    fs.mkdirSync(OUT_PATH);
  }
  const results = fs.readFileSync(TEMPLATE_PATH, "utf8");

  const compiledTemplate = results.replace(
    /\"{{REPORT_RESULT}}\"/,
    JSON.stringify(reportResults)
  );
  fs.writeFileSync(path.resolve(OUT_PATH + "/report.html"), compiledTemplate);
};
