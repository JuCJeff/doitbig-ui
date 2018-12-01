import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';

const styles = {
  root: {
    flexGrow: 1,
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img src={logo} alt="uw-madison-logo" />
          </Typography>
          <Button color="inherit">Instagram</Button>
          <Button color="inherit">Facebook</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Location</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
