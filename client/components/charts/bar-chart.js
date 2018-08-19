import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

Chart.defaults.global.defaultFontFamily = 'Source Code Pro, monospace'

import { data, options, legend } from '../../chart-data/bar-chart-data.js'

class KdChart extends Component {
  render() {
    return (
        <div class='barChart'>
            <Bar data={data} options={options} legend={legend} width='460' height='230'/>
        </div>
    )
  }
}

export default KdChart;
