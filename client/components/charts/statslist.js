import React, { Component } from 'react';
import { render } from 'react-dom';

class List extends Component {
  constructor() {
    super();
    this.state = {
      stats: [],
    };
  }
  componentDidMount() {
  }

  render() {
    const {posts} = this.state;
    console.log('stats', parseFloat(window.reactApp.stats.p2.kd.displayValue));
    const solo = Number(window.reactApp.stats.p2.kd.displayValue);
    const duos = Number(window.reactApp.stats.p10.kd.displayValue);
    const squads = Number(window.reactApp.stats.p9.kd.displayValue)
    return (
      <ul>
        <li>
          Solo KD: {solo}
        </li>
        <li>
          Duos KD: {duos}
        </li>
        <li>
          Squad KD: {squads}
        </li>
      </ul>
    );
  }
}

export default List;
