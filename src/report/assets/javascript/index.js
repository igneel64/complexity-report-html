import "../styles/index.scss";
import fileComplexityGraph from "./graphs/fileComplexity";
import fileLengthGraph from "./graphs/fileLength";
import functionComplexityGraph from "./graphs/functionComplexity";
const REPORT_RESULT = window.REPORT_RESULT;

const poorMansClone = source => JSON.parse(JSON.stringify(source));

(function buildCharts() {
  fileComplexityGraph(poorMansClone(REPORT_RESULT));
  fileLengthGraph(poorMansClone(REPORT_RESULT));
  functionComplexityGraph(poorMansClone(REPORT_RESULT));
})();
