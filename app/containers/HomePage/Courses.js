import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../images/STS-Banner.jpg';

const styles = {
  card: {
    width: 690,
  },
  media: {
    height: 140,
  },
};

const server = axios.create({
  baseURL: 'http://localhost:3001',
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image}
          title="STS sample course"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            STS Course 1
          </Typography>
          <Typography component="p">STS course 1 is a sample course</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => enroll(12345, 123)}>
          Sign Up
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function enroll(uid, cid) {
  console.log('woah, you clicked me!, ', uid, ' ', cid);
  server.post(`/enroll?uid=${uid}&cid=${cid}`);
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);