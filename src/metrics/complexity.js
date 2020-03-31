const escomplex = require("typhonjs-escomplex");

module.exports = async function calculateComplexity(source) {
  const fileResult = {
    methods: []
  };
  const {
    aggregate: { cyclomatic: fileComplexity },
    lineEnd,
    methods
  } = await escomplex.analyzeModuleAsync(source);

  const methodsReport = methods.map(({ name, cyclomatic: complexity }) => ({
    name,
    complexity
  }));

  return {
    methods: methodsReport,
    length: lineEnd,
    fileComplexity
  };
};
