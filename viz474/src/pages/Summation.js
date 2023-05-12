import React, { Component } from "react";
import BarGraph from "./SWOT";
import data_s from "../strenght.json";
import data_op from "../opportunity.json";
import data_w from "../weakness.json";
import data_t from "../threatanalysis.json";
import "./GraphSelectorSwot.css";

class GraphSummation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGraphId: 1,
      showAllGraphs: true,
      selectedParameter: "",
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

  render() {
    const { data_s, data_op, data_w, data_t } = this.props;
    const { selectedGraphId, showAllGraphs, selectedParameter } = this.state;

    if (showAllGraphs) {
      return (
        <div className="buttons">
          <button onClick={() => this.setState({ showAllGraphs: false })}>
            Hide All Graphs
          </button>
          <div className="all-graphs">
            <BarGraph data={data_w} className="graph3" label="Weakness" />
            <BarGraph data={data_s} className="graph1" label="Strength" />
            <BarGraph data={data_t} className="graph4" label="Threat" />
            <BarGraph data={data_op} className="graph2" label="Opportunity" />
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

    const allData = [data_s, data_op, data_w, data_t];
    const allParamNames = Array.from(
      new Set(allData.flatMap((data) => data.map((item) => item["PARAM NAME"])))
    );

    // Filter data based on selectedParameter
    if (selectedParameter) {
      selectedData = selectedData.filter(
        (item) => item["PARAM NAME"] === selectedParameter
      );
    }

    const labelData = {};
    for (const item of selectedData) {
      const label = item["PARAM NAME"];
      const value = parseFloat(item.VALUE);
      labelData[label] = (labelData[label] || 0) + value;
    }

    const graphData = Object.entries(labelData).map(([label, value]) => ({
      "PARAM NAME": label,
      VALUE: value.toFixed(2),
    }));

    return (
      <div>
        <div className="graph-selector">
          <button className="buttons" onClick={this.handleShowAllGraphs}>
            Show All Graphs
          </button>
          <select
            value={selectedGraphId}
            onChange={(e) => this.handleGraphSelect(parseInt(e.target.value))}
          >
            <option value={1}>Strength</option>
            <option value={2}>Opportunity</option>
            <option value={3}>Weakness</option>
            <option value={4}>Threat</option>
          </select>
          <select
            value={selectedParameter}
            onChange={this.handleParameterSelect}
          >
            <option value="">Select a parameter</option>
            {allParamNames.map((paramName, index) => (
              <option key={index} value={paramName}>
                {paramName}
              </option>
            ))}
          </select>
        </div>
        <BarGraph
          data={graphData}
          className={`graph${selectedGraphId}`}
          label={selectedData.length > 0 ? selectedData[0].LABEL : ""}
        />
      </div>
    );
  }
}

export default GraphSummation;
