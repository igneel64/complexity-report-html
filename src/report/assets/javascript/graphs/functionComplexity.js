import Chart from "chart.js";

function functionComplexityGraph(reportResults) {
  /** @type {HTMLCanvasElement} */
  const functionComplexityCanvas = document.getElementById("function");

  const functionChecks = reportResults.reduce((accum, { methods, file }) => {
    if (!methods.length) {
      return accum;
    }
    methods.forEach(({ name, complexity }) => {
      if (complexity < 2) {
        return;
      }
      accum.push({ name, complexity, file });
    });

    return accum;
  }, []);

  functionChecks.sort((cur, next) => {
    return next.complexity - cur.complexity;
  });

  const functionNames = functionChecks.map(({ name }) => name);
  const functionComplexities = functionChecks.map(
    ({ complexity }) => complexity
  );

  new Chart(functionComplexityCanvas, {
    type: "horizontalBar",
    data: {
      labels: functionNames,
      datasets: [
        {
          label: "Complexity per Function",
          data: functionComplexities,
          backgroundColor: "rgba(14, 56, 136, 0.75)",
          borderColor: "rgba(14, 56, 136, 0.95)",
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      legend: {
        labels: {
          fontSize: 16,
          fontColor: "#bdd1f8"
        },
        align: "end"
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.value} - ${
              functionChecks[tooltipItem.index].file
            }`;
          }
        }
      }
    }
  });
}

export default functionComplexityGraph;
