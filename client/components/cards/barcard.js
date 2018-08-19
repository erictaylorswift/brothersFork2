import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KdChart from '../charts/bar-chart.js'
import Icon from '@material-ui/core/Icon'

const styles = {
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function BarCard(props) {
  const { classes } = props;
  return (
    <div class='childCard'>
        <h2>Lifetime K/D Stats</h2>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            component={KdChart}
          />
      </Card>
    </div>
  );
}

BarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarCard);
