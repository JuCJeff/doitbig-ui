import React from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../images/STS-Banner.jpg';
import NavigationBar from '../../components/NavigationBar/index';
// import Tracks from './Tracks';
import Courses from './Courses';
import './style.css';

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      track_1: '1',
      track_1_des: '1',
      track_2: '1',
      track_2_des: '1',
      track_3: '1',
      track_3_des: '1',
      course_1: '1',
      course_1_des: '1',
      course_2: '1',
      course_2_des: '1',
      course_3: '1',
      course_3_des: 'courseThreeDes',
    };
  }

  hello() {
    fetch('http://localhost:3001/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ track_1: responseJson.track_1 });
        this.setState({ track_2: responseJson.track_2 });
        this.setState({ track_3: responseJson.track_3 });
        this.setState({ track_1_des: responseJson.track_1_des });
        this.setState({ track_2_des: responseJson.track_2_des });
        this.setState({ track_3_des: responseJson.track_3_des });
        this.setState({ course_1: responseJson.course_1 });
        this.setState({ course_2: responseJson.course_2 });
        this.setState({ course_3: responseJson.course_3 });
        this.setState({ course_1_des: responseJson.course_1_des });
        this.setState({ course_2_des: responseJson.course_2_des });
        this.setState({ course_3_des: responseJson.course_3_des });
      })
      .catch(error => {
        console.error(error);
      });
  }

  track(trackName, trackDes) {
    return (
      <Card className="hi" align="left">
        <CardActionArea className="cardBody">
          <CardMedia className="hi" image={Image} title="STS sample course" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {trackName}
            </Typography>
            <Typography component="p">{trackDes}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Sign Up
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }

  render() {
    this.hello();
    return (
      <div>
        {this.state.track_1}
        {this.state.track_2}
        {this.state.track_3}
        {this.state.track_1_des}
        {this.state.track_2_des}
        {this.state.track_3_des}
        {this.state.course_1}
        {this.state.course_2}
        {this.state.course_3}
        {this.state.course_1_des}
        {this.state.course_2_des}
        {this.state.course_3_des}
        <div>
          <NavigationBar />
        </div>
        <img src={Image} className="images" alt="banner" />
        <Grid container spacing={24} align="center">
          <Grid item sm={4}>
            {this.track(this.state.track_1, this.state.track_1_des)}
          </Grid>
          <Grid item sm={4}>
            {this.track(this.state.track_2, this.state.track_2_des)}
          </Grid>
          <Grid item sm={4}>
            {this.track(this.state.track_3, this.state.track_3_des)}
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
      </div>
    );
  }
}

// HomePage.propTypes = {
//  classes: PropTypes.object.isRequired,
// };
