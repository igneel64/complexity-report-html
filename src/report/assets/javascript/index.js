import Chart from "chart.js";

(function buildCharts(){
  const domComplexityGraph = document.getElementById("graph");
  const complexityChart = new Chart(domComplexityGraph, {
    type: 'bar',
    data: {
      datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70]
      }]
  }
  });

})();
