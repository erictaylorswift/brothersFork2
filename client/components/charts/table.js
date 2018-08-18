import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableHead: {
      backgroundColor: '#673AB7'
  },
  firstTitle: {
      color: '#fff',
      fontSize: '1em'
  },
  tableTitle: {
      color: '#fff',
      fontSize: '1em',
      textAlign: 'center'
  },
  cell: {
      textAlign: 'center',
  }
});

let id = 0;
function createData(name, matches, wins, per, kills, kd) {
  id += 1;
  return { id, name, matches, wins, per, kills, kd };
};

const players = [0, 1, 2, 3];
let rows =[];

for (var i =0; i<players.length; i++ ){
    let values = createData(
                window.reactApp[i].epicUserHandle,
                window.reactApp[i].stats.curr_p9.matches.valueInt + window.reactApp[i].stats.curr_p2.matches.valueInt + window.reactApp[i].stats.curr_p10.matches.valueInt,
                Number(window.reactApp[i].stats.curr_p9.top1.value) + Number(window.reactApp[i].stats.curr_p10.top1.value) + Number(window.reactApp[i].stats.curr_p2.top1.value),
                (((
                    Number(window.reactApp[i].stats.curr_p9.top1.value) + Number(window.reactApp[i].stats.curr_p10.top1.value) + Number(window.reactApp[i].stats.curr_p2.top1.value)
                ) / (
                    window.reactApp[i].stats.curr_p9.matches.valueInt + window.reactApp[i].stats.curr_p2.matches.valueInt + window.reactApp[i].stats.curr_p10.matches.valueInt
                ))*100).toFixed(2),
                Number(window.reactApp[i].stats.curr_p9.kills.value) + Number(window.reactApp[i].stats.curr_p10.kills.value) + Number(window.reactApp[i].stats.curr_p2.kills.value),
                ((
                    Number(window.reactApp[i].stats.curr_p9.kills.value) + Number(window.reactApp[i].stats.curr_p10.kills.value) + Number(window.reactApp[i].stats.curr_p2.kills.value)
                ) / (
                    window.reactApp[i].stats.curr_p9.matches.valueInt + window.reactApp[i].stats.curr_p2.matches.valueInt + window.reactApp[i].stats.curr_p10.matches.valueInt
                )).toFixed(2)
            )
    rows.push(values)
}

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.firstTitle}>Brother</TableCell>
            <TableCell className={classes.tableTitle}>Matches Played</TableCell>
            <TableCell numeric className={classes.tableTitle}>Wins</TableCell>
            <TableCell numeric className={classes.tableTitle}>Wins %</TableCell>
            <TableCell numeric className={classes.tableTitle}>Kills</TableCell>
            <TableCell numeric className={classes.tableTitle}>K/D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric className={classes.cell}>{row.matches}</TableCell>
                <TableCell numeric className={classes.cell}>{row.wins}</TableCell>
                <TableCell numeric className={classes.cell}>{row.per}</TableCell>
                <TableCell numeric className={classes.cell}>{row.kills}</TableCell>
                <TableCell numeric className={classes.cell}>{row.kd}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
