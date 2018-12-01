import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/Jeff.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid>
      <Avatar alt="Remy Sharp" src={Image} className={classes.avatar} />
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} /> */}
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
