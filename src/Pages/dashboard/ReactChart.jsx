import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];
const dataset1 = [32, 10, 17, 8, 31, 3, 12];
const dataset2 = [25, 12, 15, 12, 26, 23, 10];

const options = {
  indexAxis: "x", // Use 'x' for vertical bar chart
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const VerticalBarChart = () => {
  return (
    <div>
      <h1 className="chart_header">Revenue in last 6 month</h1>
      <Bar
        style={{ marginLeft: "8px" }}
        className="canvas"
        data={{
          labels,
          datasets: [
            {
              label: "Gross earning",
              data: dataset1,
              borderRadius: "3.241px 3.241px 0px 0px",
              backgroundColor: "#FFE1DD",
            },
            {
              label: "Net Earning",
              data: dataset2,
              borderRadius: "3.241px 3.241px 0px 0px",
              backgroundColor: "#630B00",
            },
          ],
        }}
        options={options}
        width={750}
        height={290}
      />
    </div>
  );
};

export default VerticalBarChart;
