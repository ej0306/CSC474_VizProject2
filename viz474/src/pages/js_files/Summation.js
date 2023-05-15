import React, { useState, useEffect } from "react";

function SumBarGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../strength.json");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const values = data.reduce(
    (acc, cur) => {
      acc.minProb += cur["MIN PROB ADJUSTED VALUE"];
      acc.maxProb += cur["MAX PROB ADJUSTED VALUE"];
      acc.avgProb += cur["AVERAGE PROB ADJUSTED VALUE"];
      acc.realisticProb += cur["REALISTIC PROB ADJUSTED VALUE"];
      acc.threePointProb += cur["3 POINT BASED PROB ADJUSTED VALUE"];
      acc.pertProb += cur["PERT BASED PROB ADJUSTED VALUE"];
      return acc;
    },
    {
      minProb: 0,
      maxProb: 0,
      avgProb: 0,
      realisticProb: 0,
      threePointProb: 0,
      pertProb: 0,
    }
  );

  const chartData = [
    { name: "MIN PROB ADJUSTED VALUE", value: values.minProb },
    { name: "MAX PROB ADJUSTED VALUE", value: values.maxProb },
    { name: "AVERAGE PROB ADJUSTED VALUE", value: values.avgProb },
    { name: "REALISTIC PROB ADJUSTED VALUE", value: values.realisticProb },
    { name: "3 POINT BASED PROB ADJUSTED VALUE", value: values.threePointProb },
    { name: "PERT BASED PROB ADJUSTED VALUE", value: values.pertProb },
  ];

  return (
    <div>
      <h1>Bar Graph</h1>
      <svg width={500} height={300}>
        <g>
          {chartData.map((item, index) => {
            const barHeight = item.value / 10000;
            return (
              <rect
                key={index}
                x={index * 60}
                y={300 - barHeight}
                width={40}
                height={barHeight}
                fill={"blue"}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default SumBarGraph;
