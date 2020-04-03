const path = require("path");
const promisify = require("util").promisify;
const rimraf = promisify(require("rimraf"));

exports.cleanUpDirectory = async () => {
  await rimraf(path.resolve(process.cwd(), ".complexity-report"));
};
