import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../images/logo.png';
import './styles.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <meta charSet="utf-8" />
      <title>Isometric Social Icons</title>
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <div>
              <p>CONTACT US:</p>
              <p>(608)262-5667</p>
              <p>
                <a
                  href="mailto:academictech@doit.wisc.edu"
                  style={{ textDecoration: 'none', color: 'white' }}
                  className="email"
                >
                  Email
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/place/DeLuca+Biochemistry+Building/"
                  style={{ textDecoration: 'none', color: 'white' }}
                  className="locations"
                >
                  Locations{' '}
                </a>
              </p>
            </div>
            <ul>
              <li>
                <a href="https://www.facebook.com/UWDoIT/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/uwdoit">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/university-of-wisconsin-madison/">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/uwmadison/">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Typography>
          <img src={logo} width="20%" alt="uw-madison-logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
