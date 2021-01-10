import React, { Component } from 'react'
import Chart from "chart.js";
import getTotalWeightByDate from "../../api/getTotalWeightByDateForUser"
import getTotalRepsByDate from "../../api/getTotalRepsByDateForUser"

export default class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  chartRef = React.createRef();

  async componentDidMount() {
    if (this.props.type === 'Weight') {
      let weights = await getTotalWeightByDate(this.props.id)
      this.setState({
        data: weights
      })
    } else if (this.props.type === 'Reps') {
      let reps = await getTotalRepsByDate(this.props.id)
      console.log(reps)
      this.setState({
        data: reps
      })
    }
    let labels = Object.keys(this.state.data)
    let data = Object.values(this.state.data)

    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: this.props.type,
            data: data,
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
  }
  render() {
    return (
      <div >
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}