import React, { Component } from "react";
import SumBarGraph from "./Summation";
import data_s from "../strength.json";
import data_op from "../opportunity.json";
import data_w from "../weakness.json";
import data_t from "../threatanalysis.json";
import "./Summation.css";

class SumSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGraphId: 1,
      showAllGraphs: true,
    };
  }

  handleGraphSelect = (graphId) => {
    this.setState({ selectedGraphId: graphId, showAllGraphs: false });
  };

  handleShowAllGraphs = () => {
    this.setState({ showAllGraphs: true });
  };

  handleParameterSelect = (event) => {
    const selectedParameter = event.target.value;
    this.setState({ selectedParameter });
  };

  calculateProbAdjustedValue = (parameter) => {
    const values = Object.values(
      this.props.data?.[0]?.["Data"]?.[parameter] ?? {}
    );
    const filteredValues = values.filter((val) => typeof val === "number");
    return filteredValues.reduce((acc, curr) => acc + curr, 0);
  };

  calculateAllProbAdjustedValues = () => {
    const parameters = [
      "MIN PROB ADJUSTED VALUE",
      "REALISTIC PROB ADJUSTED VALUE",
      "MAX PROB ADJUSTED VALUE",
      "AVERAGE PROB ADJUSTED VALUE",
      "3 POINT BASED PROB ADJUSTED VALUE",
      "PERT BASED PROB ADJUSTED VALUE",
    ];
    const probAdjustedValues = {};
    for (const parameter of parameters) {
      probAdjustedValues[parameter] =
        this.calculateProbAdjustedValue(parameter);
    }
    console.log("Prob Adjusted Values: ", probAdjustedValues);
    return probAdjustedValues;
  };

  render() {
    const { selectedGraphId, showAllGraphs } = this.state;

    if (showAllGraphs) {
      return (
        <div className="buttons">
          <button onClick={() => this.setState({ showAllGraphs: false })}>
            Hide All Graphs
          </button>
          <div className="all-graphs">
            <SumBarGraph data={data_w} className="graph3" label="Weakness" />
            <SumBarGraph data={data_s} className="graph1" label="Strength" />
            <SumBarGraph data={data_t} className="graph4" label="Threat" />
            <SumBarGraph
              data={data_op}
              className="graph2"
              label="Opportunity"
            />
          </div>
        </div>
      );
    }

    let selectedData;
    switch (selectedGraphId) {
      case 1:
        selectedData = data_s;
        break;
      case 2:
        selectedData = data_op;
        break;
      case 3:
        selectedData = data_w;
        break;
      case 4:
        selectedData = data_t;
        break;
      default:
        selectedData = {};
        console.log("Invalid graph ID");
    }

    return (
      <div>
        <div className="buttons">
          <button onClick={this.handleShowAllGraphs}>Show All Graphs</button>
          <select
            value={selectedGraphId}
            onChange={(event) => this.handleGraphSelect(event.target.value)}
          >
            <option value={1}>Strength</option>
            <option value={2}>Opportunity</option>
            <option value={3}>Weakness</option>
            <option value={4}>Threat</option>
          </select>
        </div>
        <div className="graph-container">
          <SumBarGraph data={selectedData} label={selectedData.label} />
        </div>
        <div className="parameter-container">
          <h3>Select Parameter:</h3>
          <select onChange={this.handleParameterSelect}>
            <option value="">Select Parameter</option>
            <option value="MIN PROB ADJUSTED VALUE">
              MIN PROB ADJUSTED VALUE
            </option>
            <option value="REALISTIC PROB ADJUSTED VALUE">
              REALISTIC PROB ADJUSTED VALUE
            </option>
            <option value="MAX PROB ADJUSTED VALUE">
              MAX PROB ADJUSTED VALUE
            </option>
            <option value="AVERAGE PROB ADJUSTED VALUE">
              AVERAGE PROB ADJUSTED VALUE
            </option>
            <option value="3 POINT BASED PROB ADJUSTED VALUE">
              3 POINT BASED PROB ADJUSTED VALUE
            </option>
            <option value="PERT BASED PROB ADJUSTED VALUE">
              PERT BASED PROB ADJUSTED VALUE
            </option>
          </select>
          {this.state.selectedParameter && (
            <div>
              <h3>Probabilistic Adjusted Value:</h3>
              <p>
                {this.calculateProbAdjustedValue(this.state.selectedParameter)}
              </p>
            </div>
          )}
          <button onClick={this.calculateAllProbAdjustedValues}>
            Calculate All Probabilistic Adjusted Values
          </button>
        </div>
      </div>
    );
  }
}

export default SumSelector;
