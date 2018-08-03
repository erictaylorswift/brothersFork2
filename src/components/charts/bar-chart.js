import React, { Component } from "react";

import {Bar} from 'react-chartjs-2';
import { data, options } from '../../chart-data/bar-chart-data.js'

class BarChart extends Component {
  render() {
    return (
        <div>
            <Bar data={data} options={options} width={300} height={125}/>
        </div>
    )
  }
}

export default BarChart;
