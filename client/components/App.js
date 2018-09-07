import React, { Component } from "react";
import BarCard from './cards/barcard.js';
import PieCard from './cards/piecard';
// import Pie from "./charts/pie-chart"
import SimpleAppBar from './app/appbar.js';
import styles from '../css/App.css';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './app/theme'
import SimpleTable from './charts/table'
import FolderList from './charts/list'
import Icon from '@material-ui/core/Icon'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <SimpleAppBar />
                    <div class="mainSection">
                        <div class='container'>
                            <FolderList />
                            <BarCard />
                            <PieCard />
                        </div>
                        <h2> Current Season Stats </h2>
                        <SimpleTable />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
