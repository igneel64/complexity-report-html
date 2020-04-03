const colors = require("colors");

module.exports = function warn() {
  console.warn(colors.yellow(`No JavaScript files found!`));
  console.warn(`Please provide the correct directory using:`);
  console.warn(
    colors.green("\t complexity-report-html generate ") +
      colors.blue("<relative-folder-path>")
  );
  console.warn(`For additional help:`);
  console.warn(colors.green("\t complexity-report-html --help"));
};
