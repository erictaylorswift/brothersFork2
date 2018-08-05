import React, { Component } from 'react';
import { render } from 'react-dom';

class List extends Component {
  constructor() {
    super();
    this.state = {
      stats: [],
    };
  }
  compenentWillMount() {

    fetch('https://api.fortnitetracker.com/v1/profile/pc/lonefreak', {
      method: "GET",
      mode: "no-cors",
      credentials: "include",
      headers: {
        "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
      }
    }).then(results => {
        return results.json();
      }).then(data => {
        let stats = data.results.map((stats) => {
          return(
              <li key={stats.results}>
                {stats.stats.kd.displayValue}
              </li>
          )
      })
      this.setState({stats : stats});
      console.log("state", this.state.stats);
    })
  }

  render() {
    const {posts} = this.state;
    return (
      <ul>
        {this.state.stats}
      </ul>
    );
  }
}

export default List;
