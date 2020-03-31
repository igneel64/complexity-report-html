const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const TEMPLATE_PATH = path.resolve(__dirname, "../report/template.ejs");
const OUT_PATH = path.resolve(process.cwd(), "cmp-rep");

module.exports = function(reportResults) {
  console.log(OUT_PATH);
  if (!fs.existsSync(OUT_PATH)) {
    fs.mkdirSync(OUT_PATH);
  }

  const compiledTemplate = ejs.render(fs.readFileSync(TEMPLATE_PATH, "utf8"), {
    REPORT_RESULTS: JSON.stringify(reportResults)
  });

  fs.writeFileSync(path.resolve(OUT_PATH + "/report.html"), compiledTemplate);
};
