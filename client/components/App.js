import React, { Component } from "react";
import BarCard from './cards/barcard.js';
import SimpleAppBar from './app/appbar.js';
import styles from '../css/App.css';

class App extends Component {
    render() {
        return (
          <div>
            <SimpleAppBar />
            <div class="mainSection">
              <BarCard />
            </div>
          </div>

        );
    }
}

export default App;
