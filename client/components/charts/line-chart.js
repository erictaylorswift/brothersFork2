import React, { Component } from "react";

import { data } from '../../chart-data/line-data.js';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries } from 'react-vis';

class LineChart extends Component {
  render() {
    return (
      <div>
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default LineChart;
