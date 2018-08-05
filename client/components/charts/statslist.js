import React, { Component } from 'react';
import { render } from 'react-dom';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stats: []
    };
  }
  compenentDidMount() {

    fetch('https://api.fortnitetracker.com/v1/profile/pc/lonefreak', {
      method: "GET",
      headers: {
        "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
      }
    })
      .then(results => results.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          stats: result.stats
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, stats } = this.state;
    if (error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {stats.map(stat => (
            <li key={stat.p2.kd}>
              {stat.label} {stat.displayValue}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default List;
