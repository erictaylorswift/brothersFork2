import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Pie from '../charts/pie-chart.js'
import Icon from '@material-ui/core/Icon';

const styles = {
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function PieCard(props) {
  const { classes } = props;
  return (
    <div class='childCard'>
        <h2><Icon>sentiment_very_dissatisfied</Icon> Kills by Brothers</h2>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            component={Pie}
          />
      </Card>
    </div>
  );
}

PieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PieCard);
