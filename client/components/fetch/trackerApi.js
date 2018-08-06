import React, { Component } from 'react';

const url = 'https://api.fortnitetracker.com/v1/profile/pc/lonefreak';
const options = {
  method: "GET",
  mode: "no-cors",
  credentials: "include",
  headers: {
    "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
  }
};

class TrackerApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(url, options)
      .then(response => respon.json())
      .then(data => this.setState( { data: data.stats } ));
  }

}

export default TrackerApi;
