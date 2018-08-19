import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Hipster, Crying, Baffled, Tongue, Wink } from '../../css/icons';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
});

let id = 0;
function createData(icon, name, matches) {
  id += 1;
  return { id, icon, name, matches};
};

const icons = [
    <Hipster/>,
    <Crying/>,
    <Baffled/>,
    <Tongue/>,
    <Wink/>
];

const players = [0, 1, 2, 3, 4];
let rows =[];

for (var i =0; i<players.length; i++ ){
    let values = createData(
                icons[i],
                window.reactApp[i].epicUserHandle,
                Number(window.reactApp[i].lifeTimeStats[7].value)
            )
    rows.push(values)
};

function FolderList(props) {
  const { classes } = props;

  return (
      <div class='childCard'>
          <h2> Lifetime Matches Played </h2>
          <Paper className={classes.root}>
            <List>
                {rows.map(row => {
                    return(
                        <ListItem key={row.id}>
                            <Avatar>
                                {row.icon}
                            </Avatar>
                            <ListItemText primary={row.matches} secondary={row.name} />
                        </ListItem>
                    );
                }
            )}
            </List>
          </Paper>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
