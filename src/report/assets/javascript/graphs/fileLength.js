import Chart from "chart.js";

function fileLengthGraph(reportResults) {
  /** @type {HTMLCanvasElement} */
  const fileLengthCanvas = document.getElementById("length");

  reportResults.sort((cur, next) => {
    return next.length - cur.length;
  });

  const filenames = reportResults.map(({ file }) => file);
  const fileLength = reportResults.map(({ length }) => length);

  new Chart(fileLengthCanvas, {
    type: "horizontalBar",
    data: {
      labels: filenames,
      datasets: [
        {
          label: "File Length",
          data: fileLength,
          backgroundColor: "rgba(97, 225, 161, 0.55)",
          borderColor: "rgba(97, 225, 161, 0.85)",
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
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
      }
    }
  });
}

export default fileLengthGraph;
