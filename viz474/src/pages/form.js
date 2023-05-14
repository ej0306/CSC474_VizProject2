import React, { useState } from "react";
import data_s from "../strength.json";
import data_op from "../opportunity.json";
import data_w from "../weakness.json";
import data_t from "../threatanalysis.json";
import "./form.css";

const jsonFiles = [
  { label: "Strength", data: data_s },
  { label: "Opportunity", data: data_op },
  { label: "Weakness", data: data_w },
  { label: "Threat Analysis", data: data_t },
];

const Form = () => {
  //const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState("");
  const [paramName, setParamName] = useState("");
  const [estValue, setEstValue] = useState("");
  const [minProb, setMinProb] = useState("");
  const [realisticProb, setRealisticProb] = useState("");
  const [maxProb, setMaxProb] = useState("");
  const [statsProb3Point, setStatsProb3Point] = useState("");
  const [statsProbPert, setStatsProbPert] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Create a state variable for each JSON file
  const [strengthData, setStrengthData] = useState(data_s);
  const [opportunityData, setOpportunityData] = useState(data_op);
  const [weaknessData, setWeaknessData] = useState(data_w);
  const [threatData, setThreatData] = useState(data_t);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedParam = jsonFiles
      .flatMap((file) => file.data)
      .find((item) => item["PARAM NAME"] === paramName);
    if (selectedParam) {
      setEstValue(selectedParam["EST. VALUE IN CURRENCY"]);
      setMinProb(selectedParam["MIN PROB ADJUSTED VALUE"]);
      setRealisticProb(selectedParam["REALISTIC PROB ADJUSTED VALUE"]);
      setMaxProb(selectedParam["MAX PROB ADJUSTED VALUE"]);
      setStatsProb3Point(selectedParam["3 POINT BASED PROB ADJUSTED VALUE"]);
      setStatsProbPert(selectedParam["PERT BASED PROB ADJUSTED VALUE"]);
    } else {
      alert("Invalid PARAM Name");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Find the category of the selected parameter
    const selectedCategory = jsonFiles.find((file) => file.label === category);
    if (!selectedCategory) {
      alert("Invalid category");
      return;
    }

    // Find the index of the selected parameter
    const selectedParamIndex = selectedCategory.data.findIndex(
      (item) => item["PARAM NAME"] === paramName
    );
    if (selectedParamIndex === -1) {
      alert("Invalid parameter name");
      return;
    }

    // Update the selected parameter
    selectedCategory.data[selectedParamIndex]["EST. VALUE IN CURRENCY"] =
      estValue;
    selectedCategory.data[selectedParamIndex]["MIN PROB ADJUSTED VALUE"] =
      minProb;
    selectedCategory.data[selectedParamIndex]["REALISTIC PROB ADJUSTED VALUE"] =
      realisticProb;
    selectedCategory.data[selectedParamIndex]["MAX PROB ADJUSTED VALUE"] =
      maxProb;
    selectedCategory.data[selectedParamIndex][
      "3 POINT BASED PROB ADJUSTED VALUE"
    ] = statsProb3Point;
    selectedCategory.data[selectedParamIndex][
      "PERT BASED PROB ADJUSTED VALUE"
    ] = statsProbPert;

    // Update the state variables
    setStrengthData(
      jsonFiles.find((file) => file.label === "Strength").data.slice()
    );
    setOpportunityData(
      jsonFiles.find((file) => file.label === "Opportunity").data.slice()
    );
    setWeaknessData(
      jsonFiles.find((file) => file.label === "Weakness").data.slice()
    );
    setThreatData(
      jsonFiles.find((file) => file.label === "Threat Analysis").data.slice()
    );

    // Clear the input fields
    setCategory("");
    setParamName("");
    setEstValue("");
    setMinProb("");
    setRealisticProb("");
    setMaxProb("");
    setStatsProb3Point("");
    setStatsProbPert("");
  };
  return (
    <div>
      <button className="toggle" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide" : "Update"} Data
      </button>
      {showForm && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Category:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">--Select Category--</option>
                {jsonFiles.map((file) => (
                  <option key={file.label} value={file.label}>
                    {file.label}
                  </option>
                ))}
              </select>
            </label>
            <br />

            <ul>
              {category === "Strength" &&
                strengthData.map((item) => (
                  <li key={item["PARAM NAME"]}>{item["PARAM NAME"]}</li>
                ))}
              {category === "Opportunity" &&
                opportunityData.map((item) => (
                  <li key={item["PARAM NAME"]}>{item["PARAM NAME"]}</li>
                ))}
              {category === "Weakness" &&
                weaknessData.map((item) => (
                  <li key={item["PARAM NAME"]}>{item["PARAM NAME"]}</li>
                ))}
              {category === "Threat Analysis" &&
                threatData.map((item) => (
                  <li key={item["PARAM NAME"]}>{item["PARAM NAME"]}</li>
                ))}
            </ul>
            <label>
              Parameter Name:
              <input
                type="text"
                value={paramName}
                onChange={(e) => setParamName(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <form onSubmit={handleUpdate}>
            <label>
              Estimated Value:
              <input
                type="text"
                value={estValue}
                onChange={(e) => setEstValue(e.target.value)}
              />
            </label>
            <br />
            <label>
              Minimum Probability Adjusted Value:
              <input
                type="text"
                value={minProb}
                onChange={(e) => setMinProb(e.target.value)}
              />
            </label>
            <br />
            <label>
              Realistic Probability Adjusted Value:
              <input
                type="text"
                value={realisticProb}
                onChange={(e) => setRealisticProb(e.target.value)}
              />
            </label>
            <br />
            <label>
              Maximum Probability Adjusted Value:
              <input
                type="text"
                value={maxProb}
                onChange={(e) => setMaxProb(e.target.value)}
              />
            </label>
            <br />
            <label>
              3 Point Probability Distribution:
              <input
                type="text"
                value={statsProb3Point}
                onChange={(e) => setStatsProb3Point(e.target.value)}
              />
            </label>
            <br />
            <label>
              PERT Probability Distribution:
              <input
                type="text"
                value={statsProbPert}
                onChange={(e) => setStatsProbPert(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
