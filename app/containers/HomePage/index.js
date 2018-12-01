/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NavigationBar from '../../components/NavigationBar/index';
import Tracks from './Tracks';
import Courses from './Courses';
import Image from '../../images/STS.jpg';
import Footer from '../../components/Footer';
import './style.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tracks: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// /* eslint-disable react/prefer-stateless-function */
// export default class HomePage extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <img src={Image} class="images" />
//         <Tracks />
//         <Courses />
//       </div>
//     );
//   }
// }

function HomePage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        <NavigationBar />
      </div>
      <img src={Image} className="images" alt="banner" />
      <Grid container spacing={24} align="center">
        <Grid item sm={4}>
          <Tracks />
        </Grid>
        <Grid item sm={4}>
          <Tracks />
        </Grid>
        <Grid item sm={4}>
          <Tracks />
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Courses />
        </Grid>
        <Grid item xs={12}>
          <Courses />
        </Grid>
        <Grid item xs={12}>
          <Courses />
        </Grid>
      </Grid>
      <div>
        <Footer />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
