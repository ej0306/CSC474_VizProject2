import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the datalabels plugin
import "../stylesheets/posneg.css";
import data_s from "../../json_files/strength.json";
import data_w from "../../json_files/weakness.json";
import data_op from "../../json_files/opportunity.json";
import data_t from "../../json_files/threatanalysis.json";

const TotalBarGraph = () => {
  const [factorTypePos, setFactorTypePos] = useState("");
  const [factorTypeNeg, setFactorTypeNeg] = useState(""); // State to hold the selected factor type
  const [differential, setDifferential] = useState("");
  const [showData, setShowData] = useState(true);

  let positiveData = [];
  let negativeData = [];
  let differentialData = [];

  positiveData = [
    data_s.reduce(
      (sum, item) => sum + (item["MIN PROB ADJUSTED VALUE"] || 0),
      0
    ) +
      data_s.reduce(
        (sum, item) => sum + (item["REALISTIC PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_s.reduce(
        (sum, item) => sum + (item["MAX PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_s.reduce(
        (sum, item) => sum + (item["AVERAGE PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_s.reduce(
        (sum, item) => sum + (item["3 POINT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_s.reduce(
        (sum, item) => sum + (item["PERT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_op.reduce(
        (sum, item) => sum + (item["MIN PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_op.reduce(
        (sum, item) => sum + (item["REALISTIC PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_op.reduce(
        (sum, item) => sum + (item["MAX PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_op.reduce(
        (sum, item) => sum + (item["AVERAGE PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_op.reduce(
        (sum, item) => sum + (item["3 POINT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_op.reduce(
        (sum, item) => sum + (item["PERT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ),
  ];

  negativeData = [
    data_w.reduce(
      (sum, item) => sum + (item["MIN PROB ADJUSTED VALUE"] || 0),
      0
    ) +
      data_w.reduce(
        (sum, item) => sum + (item["REALISTIC PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_w.reduce(
        (sum, item) => sum + (item["MAX PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_w.reduce(
        (sum, item) => sum + (item["AVERAGE PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_w.reduce(
        (sum, item) => sum + (item["3 POINT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_w.reduce(
        (sum, item) => sum + (item["PERT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_t.reduce(
        (sum, item) => sum + (item["MIN PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_t.reduce(
        (sum, item) => sum + (item["REALISTIC PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_t.reduce(
        (sum, item) => sum + (item["MAX PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_t.reduce(
        (sum, item) => sum + (item["AVERAGE PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_t.reduce(
        (sum, item) => sum + (item["3 POINT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ) +
      data_t.reduce(
        (sum, item) => sum + (item["PERT BASED PROB ADJUSTED VALUE"] || 0),
        0
      ),
  ];
  if (differential === "Differential") {
    const positiveValues = positiveData.filter((value) => value !== null);
    const negativeValues = negativeData.filter((value) => value !== null);

    if (positiveValues && negativeValues) {
      differentialData = positiveValues.map(
        (value, index) => value - negativeValues[index]
      );
    } else {
      differentialData = [];
    }
  }

  const data = {
    labels: ["Strength+Oppportunity", "Weakness + Threat", "Differential"],
    datasets: [
      {
        label: "",
        data: [positiveData, negativeData, differentialData],
        backgroundColor: [
          "rgba(40, 180, 99, 0.65)",
          "rgba(176, 58, 46, 0.7)",
          "rgba(202, 179, 136, 0.9)",
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Values in Dollar ($)",
          font: {
            family: "Arial",
            size: 25,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value) => (value !== 0 ? value : ""),
        color: "teal", //Color of the value labels
        font: {
          weight: "bold", // Font weight of the value labels
          size: 15, // Font size of the value labels
        },
      },
      legend: {
        display: false,
        labels: {
          boxWidth: 0,
        },
      },
    },
  };

  const handleButtonClickPos = (selectedFactorTypePos) => {
    setFactorTypePos(selectedFactorTypePos);
  };
  const handleButtonClickNeg = (selectedFactorTypeNeg) => {
    setFactorTypeNeg(selectedFactorTypeNeg);
  };

  const handleButtonClickDiff = () => {
    if (differential === "Differential") {
      setDifferential(""); // Toggle off differential data display
    } else {
      setDifferential("Differential"); // Toggle on differential data display
    }
  };

  return (
    <>
      <div className="btn-posneg-grp">
        <div className="btn-grp-posneg">
          <div className="btn-grp-diff">
            <button onClick={handleButtonClickDiff}>
              {differential === "Differential"
                ? "Hide Differential"
                : "Show Differential"}
            </button>
          </div>
        </div>
      </div>
      <div className="header">
        <h3 className="title">
          Total Values in Dollar for Strength, Oppportunity, Weakness, and
          Threat
        </h3>
      </div>
      <div className="graph-container">
        <Bar data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
    </>
  );
};

export default TotalBarGraph;
