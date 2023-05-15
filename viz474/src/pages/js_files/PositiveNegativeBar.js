import React from "react";
import { Bar } from "react-chartjs-2";
import "../stylesheets/posneg.css";

const data = {
  labels: [
    "MIN PROB ADJUSTED VALUE",
    "MAX PROB ADJUSTED VALUE",
    "AVERAGE PROB ADJUSTED VALUE",
    "REALISTIC PROB ADJUSTED VALUE",
    "3 POINT BASED PROB ADJUSTED VALUE",
    "PERT BASED PROB ADJUSTED VALUE",
  ],
  datasets: [
    {
      label: "Positive",
      backgroundColor: "rgba(30,26,26)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      data: [888000, 1620000, 1254000, 1350250, 1286084, 1318166],
    },
    {
      label: "Negative",
      backgroundColor: "rgba(224,102,102)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      data: [268500, 513500, 391000, 410000, 397333, 403667],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const PosBarGraph = () => (
  <>
    <div className="header">
      <h3 className="title">POSITIVE/NEGATIVE Bar Graph</h3>
    </div>
    <div className="graph-container">
      <Bar data={data} options={options} />
    </div>
  </>
);

export default PosBarGraph;
