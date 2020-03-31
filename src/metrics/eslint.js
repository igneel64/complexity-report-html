const Linter = require("eslint").Linter;
const path = require("path");
const linter = new Linter();

const DEFAULT_OPTIONS = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    complexity: [2, 5],
    "max-statements": [2, 7],
    "max-nested-callbacks": [2, 2],
    "max-depth": [2, { max: 2 }],
    "max-lines": ["error", { max: 120, skipBlankLines: true }]
  }
};

const RULESET = Object.keys(DEFAULT_OPTIONS.rules);

module.exports = function validateRules(source) {
  return linter
    .verify(source, DEFAULT_OPTIONS)
    .filter(({ ruleId }) => RULESET.includes(ruleId))
    .map(({ ruleId, message }) => ({ ruleId, message }));
};
