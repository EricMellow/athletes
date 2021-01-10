import React, { Component } from 'react'
import "./Display.scss"
import Chart from "chart.js";
import getTotalWeightByDate from "../../api/getTotalWeightByDateForUser"
import getTotalRepsByDate from "../../api/getTotalRepsByDateForUser"

export default class Display extends Component {
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
      this.setState({
        data: reps
      })
    }
    let labels = Object.keys(this.state.data).reverse().slice(0, 10)
    let data = Object.values(this.state.data).reverse().slice(0, 10)
    
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: this.props.type,
            data: data,
            backgroundColor: "#F5B10A"
          }
        ]
      },
      options: {
      }
    });
  }
  render() {
    let vals = Object.values(this.state.data).reverse().slice(0, 10)
    let totalDataValue = vals.reduce((total, value) => {
      return total += value
    }, 0)
    return (
      <div className="graph-container">
        <div className="totals">
          <h1 className="total-text">{totalDataValue.toLocaleString()}</h1>
          {this.props.type === "Weight" && <h1 className="total-text">Pounds Lifted</h1>}
          {this.props.type === "Reps" && <h1 className="total-text">Reps</h1>}
        </div>
        <canvas
          id="myChart"
          className="chart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}