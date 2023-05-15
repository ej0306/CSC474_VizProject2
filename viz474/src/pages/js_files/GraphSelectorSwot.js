import React, { Component } from "react";
import BarGraph from "./SWOT";
import Form from "./form";
import data_s from "../../json_files/strength.json";
import data_op from "../../json_files/opportunity.json";
import data_w from "../../json_files/weakness.json";
import data_t from "../../json_files/threatanalysis.json";
import "./../stylesheets/GraphSelectorSwot.css";

class GraphSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGraphId: 1,
      showAllGraphs: true,
      selectedParameter: "", // Added selectedParameter state
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
            <BarGraph
              data={data_s}
              className="graph1"
              label="STRENGTH - POSITIVE"
            />
            <BarGraph
              data={data_w}
              className="graph3"
              label="WEAKNESS - NEGATIVE"
            />
            <BarGraph
              data={data_op}
              className="graph2"
              label="OPPORTUNITY -  POSITIVE"
            />
            <BarGraph
              data={data_t}
              className="graph4"
              label="THREAT - NEGATIVE"
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

    return (
      <div>
        <div className="graph-selector">
          <button className="buttons" onClick={this.handleShowAllGraphs}>
            Show All Graphs
          </button>
          <select
            className="select-category"
            value={selectedGraphId}
            onChange={(e) => this.handleGraphSelect(parseInt(e.target.value))}
          >
            <option value={1}>Strength</option>
            <option value={2}>Opportunity</option>
            <option value={3}>Weakness</option>
            <option value={4}>Threat</option>
          </select>
          <select
            className="select-category"
            value={selectedParameter}
            onChange={this.handleParameterSelect}
          >
            <option value="">Select Parameter</option>
            {allParamNames.map((param) => (
              <option key={param} value={param}>
                {param}
              </option>
            ))}
          </select>
          <div className="form">
            <Form />
          </div>
        </div>

        <BarGraph data={selectedData} className={`graph${selectedGraphId}`} />
      </div>
    );
  }
}

class GraphSelect extends Component {
  render() {
    return (
      <div className="graph1">
        <GraphSelector
          data_w={data_w}
          data_s={data_s}
          data_op={data_op}
          data_t={data_t}
        />
      </div>
    );
  }
}

export default GraphSelect;
