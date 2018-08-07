import React, { Component } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip, Cell, ResponsiveContainer } from 'recharts';

import { data, colors } from '../../chart-data/bar-chart-data.js'

class KdChart extends Component {
  render() {
    return (
        <BarChart data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='kd'>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))
            }
          </Bar>
        </BarChart>
    )
  }
}

export default KdChart;
