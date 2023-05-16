import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "../stylesheets/posneg.css";
import data_s from "../../json_files/strength.json";
import data_w from "../../json_files/weakness.json";
import data_op from "../../json_files/opportunity.json";
import data_t from "../../json_files/threatanalysis.json";

const SumBarGraph = () => {
  const [category, setCategory] = useState("");
  const [sDataMin, setSDataMin] = useState(0);
  const [sDataMax, setSDataMax] = useState(0);
  const [sDataAvg, setSDataAvg] = useState(0);
  const [sDataRel, setSDataRel] = useState(0);
  const [sData3pt, setSData3pt] = useState(0);
  const [sDataPert, setSDataPert] = useState(0);

  useEffect(() => {
    if (category === "Strength") {
      const strengthData = data_s.slice(0, 3); // Get the relevant data entries
      const minValues = strengthData.map((item) =>
        parseFloat(item["MIN PROB ADJUSTED VALUE"])
      );
      const relValues = strengthData.map((item) =>
        parseFloat(item["REALISTIC PROB ADJUSTED VALUE"])
      );
      const maxValues = strengthData.map((item) =>
        parseFloat(item["MAX PROB ADJUSTED VALUE"])
      );
      const avgValues = strengthData.map((item) =>
        parseFloat(item["AVERAGE PROB ADJUSTED VALUE"])
      );
      const threePtValues = strengthData.map((item) =>
        parseFloat(item["3 POINT BASED PROB ADJUSTED VALUE"])
      );
      const pertValues = strengthData.map((item) =>
        parseFloat(item["PERT BASED PROB ADJUSTED VALUE"])
      );

      setSDataMin(minValues.reduce((sum, value) => sum + value, 0));
      setSDataRel(relValues.reduce((sum, value) => sum + value, 0));
      setSDataMax(maxValues.reduce((sum, value) => sum + value, 0));
      setSDataAvg(avgValues.reduce((sum, value) => sum + value, 0));
      setSData3pt(threePtValues.reduce((sum, value) => sum + value, 0));
      setSDataPert(pertValues.reduce((sum, value) => sum + value, 0));
    } else if (category === "Opportunity") {
      const strengthData = data_op.slice(0, 3); // Get the relevant data entries
      const minValues = strengthData.map((item) =>
        parseFloat(item["MIN PROB ADJUSTED VALUE"])
      );
      const relValues = strengthData.map((item) =>
        parseFloat(item["REALISTIC PROB ADJUSTED VALUE"])
      );
      const maxValues = strengthData.map((item) =>
        parseFloat(item["MAX PROB ADJUSTED VALUE"])
      );
      const avgValues = strengthData.map((item) =>
        parseFloat(item["AVERAGE PROB ADJUSTED VALUE"])
      );
      const threePtValues = strengthData.map((item) =>
        parseFloat(item["3 POINT BASED PROB ADJUSTED VALUE"])
      );
      const pertValues = strengthData.map((item) =>
        parseFloat(item["PERT BASED PROB ADJUSTED VALUE"])
      );

      setSDataMin(minValues.reduce((sum, value) => sum + value, 0));
      setSDataRel(relValues.reduce((sum, value) => sum + value, 0));
      setSDataMax(maxValues.reduce((sum, value) => sum + value, 0));
      setSDataAvg(avgValues.reduce((sum, value) => sum + value, 0));
      setSData3pt(threePtValues.reduce((sum, value) => sum + value, 0));
      setSDataPert(pertValues.reduce((sum, value) => sum + value, 0));
      // ...
    } else if (category === "Weakness") {
      const strengthData = data_w.slice(0, 3); // Get the relevant data entries
      const minValues = strengthData.map((item) =>
        parseFloat(item["MIN PROB ADJUSTED VALUE"])
      );
      const relValues = strengthData.map((item) =>
        parseFloat(item["REALISTIC PROB ADJUSTED VALUE"])
      );
      const maxValues = strengthData.map((item) =>
        parseFloat(item["MAX PROB ADJUSTED VALUE"])
      );
      const avgValues = strengthData.map((item) =>
        parseFloat(item["AVERAGE PROB ADJUSTED VALUE"])
      );
      const threePtValues = strengthData.map((item) =>
        parseFloat(item["3 POINT BASED PROB ADJUSTED VALUE"])
      );
      const pertValues = strengthData.map((item) =>
        parseFloat(item["PERT BASED PROB ADJUSTED VALUE"])
      );

      setSDataMin(minValues.reduce((sum, value) => sum + value, 0));
      setSDataRel(relValues.reduce((sum, value) => sum + value, 0));
      setSDataMax(maxValues.reduce((sum, value) => sum + value, 0));
      setSDataAvg(avgValues.reduce((sum, value) => sum + value, 0));
      setSData3pt(threePtValues.reduce((sum, value) => sum + value, 0));
      setSDataPert(pertValues.reduce((sum, value) => sum + value, 0));
    } else if (category === "Threat") {
      const strengthData = data_t.slice(0, 3); // Get the relevant data entries
      const minValues = strengthData.map((item) =>
        parseFloat(item["MIN PROB ADJUSTED VALUE"])
      );
      const relValues = strengthData.map((item) =>
        parseFloat(item["REALISTIC PROB ADJUSTED VALUE"])
      );
      const maxValues = strengthData.map((item) =>
        parseFloat(item["MAX PROB ADJUSTED VALUE"])
      );
      const avgValues = strengthData.map((item) =>
        parseFloat(item["AVERAGE PROB ADJUSTED VALUE"])
      );
      const threePtValues = strengthData.map((item) =>
        parseFloat(item["3 POINT BASED PROB ADJUSTED VALUE"])
      );
      const pertValues = strengthData.map((item) =>
        parseFloat(item["PERT BASED PROB ADJUSTED VALUE"])
      );

      setSDataMin(minValues.reduce((sum, value) => sum + value, 0));
      setSDataRel(relValues.reduce((sum, value) => sum + value, 0));
      setSDataMax(maxValues.reduce((sum, value) => sum + value, 0));
      setSDataAvg(avgValues.reduce((sum, value) => sum + value, 0));
      setSData3pt(threePtValues.reduce((sum, value) => sum + value, 0));
      setSDataPert(pertValues.reduce((sum, value) => sum + value, 0));
    }
  }, [category]);
  const data = {
    labels: ["MIN", "REALISTIC", "MAX", "AVERAGE", "3PT", "PERT"],
    datasets: [
      {
        label: category,
        data: [sDataMin, sDataRel, sDataMax, sDataAvg, sData3pt, sDataPert],
        backgroundColor: [
          "rgba(255, 192, 159, 0.9)",
          "rgba(255, 238, 147, 0.9)",
          "rgba(184, 224, 210, 0.9)",
          "rgba(160, 206, 217, 0.9)",
          "rgba(234, 196, 213, 0.9)",
          "rgba(255, 104, 107, 0.9)",
        ],
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
    legend: {
      display: false,
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

  const handleButtonClick = (selectedFactorType) => {
    setCategory(selectedFactorType);
  };

  return (
    <>
      <div className="btn-posneg-grp">
        <div className="btn-grp-posneg">
          <div>
            <select
              value={category}
              onChange={(e) => handleButtonClick(e.target.value)}
            >
              <option value="">Select Factor Type</option>
              <option value="Strength">Strength</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Weakness">Weakness</option>
              <option value="Threat">Threat</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header">
        <h3 className="title">SWOT - SUMMATION</h3>
      </div>
      <div className="graph-container">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default SumBarGraph;
