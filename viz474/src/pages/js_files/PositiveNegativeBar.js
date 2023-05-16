import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "../stylesheets/posneg.css";
import data_s from "../../json_files/strength.json";
import data_w from "../../json_files/weakness.json";
import data_op from "../../json_files/opportunity.json";
import data_t from "../../json_files/threatanalysis.json";
import data_ss from "../../json_files/strengthsum.json";
import data_ww from "../../json_files/weaknesssum.json";
import data_ops from "../../json_files/opportunitysum.json";
import data_tt from "../../json_files/threatanalysissum.json";

const PosBarGraph = () => {
  const [factorTypePos, setFactorTypePos] = useState("");
  const [factorTypeNeg, setFactorTypeNeg] = useState(""); // State to hold the selected factor type
  const [differential, setDifferential] = useState("");
  const [showData, setShowData] = useState(true);

  let positiveData = [];
  let negativeData = [];
  let differentialData = [];

  if ((factorTypePos || factorTypeNeg) === "Patented Technology") {
    positiveData = [
      data_s[0]["MIN PROB ADJUSTED VALUE"],
      data_s[0]["REALISTIC PROB ADJUSTED VALUE"],
      data_s[0]["MAX PROB ADJUSTED VALUE"],
      data_s[0]["AVERAGE PROB ADJUSTED VALUE"],
      data_s[0]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_s[0]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypePos === "Tech Resources") {
    positiveData = [
      data_s[1]["MIN PROB ADJUSTED VALUE"],
      data_s[1]["REALISTIC PROB ADJUSTED VALUE"],
      data_s[1]["MAX PROB ADJUSTED VALUE"],
      data_s[1]["AVERAGE PROB ADJUSTED VALUE"],
      data_s[1]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_s[1]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypePos === "Transportation Access Points") {
    positiveData = [
      data_s[2]["MIN PROB ADJUSTED VALUE"],
      data_s[2]["REALISTIC PROB ADJUSTED VALUE"],
      data_s[2]["MAX PROB ADJUSTED VALUE"],
      data_s[2]["AVERAGE PROB ADJUSTED VALUE"],
      data_s[2]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_s[2]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypePos === "Local Tax Incentive") {
    positiveData = [
      data_op[0]["MIN PROB ADJUSTED VALUE"],
      data_op[0]["REALISTIC PROB ADJUSTED VALUE"],
      data_op[0]["MAX PROB ADJUSTED VALUE"],
      data_op[0]["AVERAGE PROB ADJUSTED VALUE"],
      data_op[0]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_op[0]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypePos === "Export Zone Location") {
    positiveData = [
      data_op[1]["MIN PROB ADJUSTED VALUE"],
      data_op[1]["REALISTIC PROB ADJUSTED VALUE"],
      data_op[1]["MAX PROB ADJUSTED VALUE"],
      data_op[1]["AVERAGE PROB ADJUSTED VALUE"],
      data_op[1]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_op[1]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypePos === "Easy Access to Ports") {
    positiveData = [
      data_op[2]["MIN PROB ADJUSTED VALUE"],
      data_op[2]["REALISTIC PROB ADJUSTED VALUE"],
      data_op[2]["MAX PROB ADJUSTED VALUE"],
      data_op[2]["AVERAGE PROB ADJUSTED VALUE"],
      data_op[2]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_op[2]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  }

  if (factorTypeNeg === "Real Estate Cost") {
    negativeData = [
      data_w[0]["MIN PROB ADJUSTED VALUE"],
      data_w[0]["REALISTIC PROB ADJUSTED VALUE"],
      data_w[0]["MAX PROB ADJUSTED VALUE"],
      data_w[0]["AVERAGE PROB ADJUSTED VALUE"],
      data_w[0]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_w[0]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypeNeg === "Tech Platform Changes") {
    negativeData = [
      data_w[1]["MIN PROB ADJUSTED VALUE"],
      data_w[1]["REALISTIC PROB ADJUSTED VALUE"],
      data_w[1]["MAX PROB ADJUSTED VALUE"],
      data_w[1]["AVERAGE PROB ADJUSTED VALUE"],
      data_w[1]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_w[1]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypeNeg === "Access to Ports") {
    negativeData = [
      data_w[2]["MIN PROB ADJUSTED VALUE"],
      data_w[2]["REALISTIC PROB ADJUSTED VALUE"],
      data_w[2]["MAX PROB ADJUSTED VALUE"],
      data_w[2]["AVERAGE PROB ADJUSTED VALUE"],
      data_w[2]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_w[2]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypeNeg === "Political unrest") {
    negativeData = [
      data_t[0]["MIN PROB ADJUSTED VALUE"],
      data_t[0]["REALISTIC PROB ADJUSTED VALUE"],
      data_t[0]["MAX PROB ADJUSTED VALUE"],
      data_t[0]["AVERAGE PROB ADJUSTED VALUE"],
      data_t[0]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_t[0]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypeNeg === "Competition") {
    negativeData = [
      data_t[1]["MIN PROB ADJUSTED VALUE"],
      data_t[1]["REALISTIC PROB ADJUSTED VALUE"],
      data_t[1]["MAX PROB ADJUSTED VALUE"],
      data_t[1]["AVERAGE PROB ADJUSTED VALUE"],
      data_t[1]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_t[1]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  } else if (factorTypeNeg === "Tax Code change") {
    negativeData = [
      data_t[2]["MIN PROB ADJUSTED VALUE"],
      data_t[2]["REALISTIC PROB ADJUSTED VALUE"],
      data_t[2]["MAX PROB ADJUSTED VALUE"],
      data_t[2]["AVERAGE PROB ADJUSTED VALUE"],
      data_t[2]["3 POINT BASED PROB ADJUSTED VALUE"],
      data_t[2]["PERT BASED PROB ADJUSTED VALUE"],
    ];
  }
  if (differential === "Differential") {
    differentialData = [
      data_ss[0]["MIN PROB ADJUSTED VALUE"] +
        data_ops[0]["MIN PROB ADJUSTED VALUE"] -
        (data_ww[0]["MIN PROB ADJUSTED VALUE"] +
          data_tt[0]["MIN PROB ADJUSTED VALUE"]),
      data_ss[0]["REALISTIC PROB ADJUSTED VALUE"] +
        data_ops[0]["REALISTIC PROB ADJUSTED VALUE"] -
        (data_ww[0]["REALISTIC PROB ADJUSTED VALUE"] +
          data_tt[0]["REALISTIC PROB ADJUSTED VALUE"]),
      data_ss[0]["MAX PROB ADJUSTED VALUE"] +
        data_ops[0]["MAX PROB ADJUSTED VALUE"] -
        (data_ww[0]["MAX PROB ADJUSTED VALUE"] +
          data_tt[0]["MAX PROB ADJUSTED VALUE"]),
      data_ss[0]["AVERAGE PROB ADJUSTED VALUE"] +
        data_ops[0]["AVERAGE PROB ADJUSTED VALUE"] -
        (data_ww[0]["AVERAGE PROB ADJUSTED VALUE"] +
          data_tt[0]["AVERAGE PROB ADJUSTED VALUE"]),
      data_ss[0]["3 POINT BASED PROB ADJUSTED VALUE"] +
        data_ops[0]["3 POINT BASED PROB ADJUSTED VALUE"] -
        (data_ww[0]["3 POINT BASED PROB ADJUSTED VALUE"] +
          data_tt[0]["3 POINT BASED PROB ADJUSTED VALUE"]),
      data_ss[0]["PERT BASED PROB ADJUSTED VALUE"] +
        data_ops[0]["PERT BASED PROB ADJUSTED VALUE"] -
        (data_ww[0]["PERT BASED PROB ADJUSTED VALUE"] +
          data_tt[0]["PERT BASED PROB ADJUSTED VALUE"]),
    ];
  }
  const data = {
    labels: ["MIN", "REALISTIC", "MAX", "AVERAGE", "3PT", "PERT"],
    datasets: [
      {
        label: "Positive",
        data: positiveData,
        backgroundColor: "rgba(63,63,62)",
      },
      {
        label: "Negative",
        data: negativeData,
        backgroundColor: "rgba(197,69,86)",
      },
      {
        label: "Differential",
        data:
          showData && differential === "Differential" ? differentialData : [],
        backgroundColor: "rgba(255,239,194)",
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
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value) => (value !== 0 ? value : ""),
        color: "black", // Color of the value labels
        font: {
          weight: "bold", // Font weight of the value labels
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
          <div>
            <select
              value={factorTypePos}
              onChange={(e) => handleButtonClickPos(e.target.value)}
            >
              <option value="">Select Factor Type</option>
              <option value="Patented Technology">
                Strength - Patented Technology
              </option>
              <option value="Tech Resources">Strength - Tech Resources</option>
              <option value="Transportation Access Points">
                Strength - Transportation Access Points
              </option>
              <option value="Local Tax Incentive">
                Opportunity - Local Tax Incentive
              </option>
              <option value="Export Zone Location">
                Opportunity - Export Zone Location
              </option>
              <option value="Easy Access to Ports">
                Opportunity - Easy Access to Ports
              </option>
            </select>
          </div>

          <div className="btn-neg">
            <select
              value={factorTypeNeg}
              onChange={(e) => handleButtonClickNeg(e.target.value)}
            >
              <option value="">Select Factor Type</option>
              <option value="Real Estate Cost">
                Weakness - Real Estate Cost
              </option>
              <option value="Tech Platform Changes">
                Weakness - Tech Platform Changes
              </option>
              <option value="Access to Ports">
                Weakness - Access to Ports
              </option>
              <option value="Political unrest">
                Threat - Political unrest
              </option>
              <option value="Competition">Threat - Competition</option>
              <option value="Tax Code change">Threat - Tax Code change</option>
            </select>
          </div>
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
        <h3 className="title">POSITIVE/NEGATIVE Bar Graph</h3>
      </div>
      <div className="graph-container">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default PosBarGraph;