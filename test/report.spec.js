const generateReport = require("../src/analyze");
const fs = require("fs").promises;
const path = require("path");
const { cleanUpDirectory } = require("./mockData/util");

describe("Report generation", () => {
  const expectedReportPath = path.resolve(
    process.cwd(),
    ".complexity-report",
    "report.html"
  );

  beforeAll(async () => {
    await cleanUpDirectory();
  });
  afterEach(async () => {
    await cleanUpDirectory();
  });

  test("report is generated", async () => {
    await generateReport();
    expect(fs.lstat(expectedReportPath)).resolves.toBeTruthy();
  });

  test("report is generated without placeholder data", async () => {
    await generateReport();
    const reportSource = await fs.readFile(expectedReportPath, "utf-8");
    expect(reportSource).toMatch("window.REPORT_RESULT");
    expect(reportSource).not.toMatch("{{REPORT_RESULT}}");
  });
});
