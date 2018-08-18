import React, { Component } from "react";

import { Doughnut } from 'react-chartjs-2';
import { data, options, legend } from '../../chart-data/pie-chart-data.js'

class Pie extends Component {
  render() {
    return (
        <div class='barChart'>
            <Doughnut data={data} options={options} legend={legend}/>
        </div>
    )
  }
}

export default Pie;
