import React, { Component } from "react";
import Chart from "chart.js/auto";

class SumBarGraph extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.myChart = null;
  }

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.updateChart();
    }
  }

  createChart() {
    if (this.myChart) {
      this.myChart.destroy();
    }
    const myChartRef = this.chartRef.current.getContext("2d");
    this.myChart = new Chart(myChartRef, {
      label: ["Strenght", "Weakness", "Opportunity", "Threat"],
      type: "bar",
      data: {
        labels: ["Min", "Realistic", "Max", "Avg.", "3PT", "PERT"],
        datasets: [
          {
            label: this.props.label,
            data: [
              this.props.data?.[0]?.["MIN PROB ADJUSTED VALUE"],
              this.props.data?.[0]?.["REALISTIC PROB ADJUSTED VALUE"],
              this.props.data?.[0]?.["MAX PROB ADJUSTED VALUE"],
              this.props.data?.[0]?.["AVERAGE PROB ADJUSTED VALUE"],
              this.props.data?.[0]?.["3 POINT BASED PROB ADJUSTED VALUE"],
              this.props.data?.[0]?.["PERT BASED PROB ADJUSTED VALUE"],
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
            },
          ],
        },
      },
    });
  }

  updateChart() {
    this.myChart.data.datasets[0].data = [
      this.props.data?.[0]?.["MIN PROB ADJUSTED VALUE"],
      this.props.data?.[0]?.["REALISTIC PROB ADJUSTED VALUE"],
      this.props.data?.[0]?.["MAX PROB ADJUSTED VALUE"],
      this.props.data?.[0]?.["AVERAGE PROB ADJUSTED VALUE"],
      this.props.data?.[0]?.["3 POINT BASED PROB ADJUSTED VALUE"],
      this.props.data?.[0]?.["PERT BASED PROB ADJUSTED VALUE"],
    ];
    this.myChart.update();
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default SumBarGraph;
