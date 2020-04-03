import Chart from "chart.js";

function fileComplexityGraph(reportResults) {
  /** @type {HTMLCanvasElement} */
  const domComplexityCanvas = document.getElementById("complexity");
  const filenames = reportResults.map(({ file }) => file);
  const fileComplexity = reportResults.map(
    ({ fileComplexity }) => fileComplexity
  );

  new Chart(domComplexityCanvas, {
    type: "bar",
    data: {
      labels: filenames,
      datasets: [
        {
          label: "Complexity per File",
          data: fileComplexity,
          backgroundColor: "rgba(163, 94, 2, 0.85)",
          borderColor: "rgba(163, 94, 2, 0.95)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      legend: {
        labels: {
          fontSize: 16,
          fontColor: "#bdd1f8",
        },
        align: "end",
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return `File Complexity ${tooltipItem.value}`;
          },
        },
      },
    },
  });
}

export default fileComplexityGraph;
