import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from '../../images/STS.jpg';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a Wordpress Course.
        </Typography>
        <img src={Image} className="images" alt="banner" />
        <Typography component="p">
          WordPress.com offers a simple solution for getting basic websites up
          and running quickly, with no coding or technical knowledge needed.
        </Typography>
        <Typography component="p">
          This course provides an introduction to WordPress.com and guides you
          through the process of setting up a simple site.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
