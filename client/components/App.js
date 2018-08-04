import React, { Component } from "react";
import BarChart from './charts/bar-chart.js';

import styles from '../css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Brothers Fork Knife</h1>
                <BarChart />
            </div>
        );
    }
}

export default App;
