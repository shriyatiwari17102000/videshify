// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const labels = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sep",
// ];
// const dataset1 = [33, 11, 19, 8, 32, 18, 13, 7, 20];
// const dataset2 = [25, 12, 15, 12, 26, 23, 10, 3, 14];

// const options = {
//   indexAxis: "x", // Use 'x' for vertical bar chart
//   responsive: true,
//   plugins: {
//     legend: {
//       display: true,
//       position: "top",
//     },
//   },
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// const PaymentChart = () => {
//   return (
//     <div style={{ width: "800px", height: "343px" }}>
//       <h1 className="chart_header">Revenue in last 6 month</h1>
//       <div>
//         <Bar
//           style={
//             {
//               // marginLeft: "37px",
//               //   height: "300px !impor
//             }
//           }
//           className="canvas"
//           data={{
//             labels,
//             datasets: [
//               {
//                 label: "Gross earning",
//                 data: dataset1,
//                 borderRadius: "3.433px 3.433px 0px 0px",
//                 backgroundColor: "#FFE1DD",
//               },
//               {
//                 label: "Net Earning",
//                 data: dataset2,
//                 borderRadius: "3.433px 3.433px 0px 0px",
//                 backgroundColor: "#630B00",
//               },
//             ],
//           }}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// };

// export default PaymentChart;

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

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
];
const dataset1 = [33, 11, 19, 8, 32, 18, 13, 7, 20];
const dataset2 = [25, 12, 15, 12, 26, 23, 10, 3, 14];

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

const PaymentChart = () => {
  return (
    <div>
      <h1 className="chart_header">Revenue in last 6 months</h1>
      <div>
        <Bar
          style={{ marginLeft: "30px", marginRight: "30px" }}
          data={{
            labels,
            datasets: [
              {
                label: "Gross earning",
                data: dataset1,
                borderRadius: "3.433px 3.433px 0px 0px",
                backgroundColor: "#FFE1DD",
              },
              {
                label: "Net Earning",
                data: dataset2,
                borderRadius: "3.433px 3.433px 0px 0px",
                backgroundColor: "#630B00",
              },
            ],
          }}
          options={options}
          width={764}
          height={279}
        />
      </div>
    </div>
  );
};

export default PaymentChart;
