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
    console.log('JSON.stringify(window.reactApp, null, 2)', JSON.stringify(window.reactApp, null, 2));
    return (
      <ul>
        Hello?
        {JSON.stringify(window.reactApp, null, 2)}
      </ul>
    );
  }
}

export default List;
