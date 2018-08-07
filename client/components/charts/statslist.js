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
    console.log('stats', JSON.stringify(window.reactApp, null, 2));

    return (
      <ul>
      </ul>
    );
  }
}

export default List;
