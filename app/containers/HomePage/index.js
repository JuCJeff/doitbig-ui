import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/STS-Banner.jpg';
import NavigationBar from '../../components/NavigationBar/index';
import Tracks from './Tracks';
import Courses from './Courses';
import './style.css';
const axios = require('axios');
const server = axios.create({
  baseURL: 'http://localhost:3001',
});

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    server.get(`/`).then(
      result => {
        this.setState({
          isLoaded: true,
          data: result.data,
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
        });
      },
    );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (!error && isLoaded) {
      return (
        <div>
          <div>
            <NavigationBar />
          </div>
          <img src={Image} className="images" alt="banner" />
          <Grid container spacing={24} align="center">
            <Grid item sm={4}>
              <Tracks name={data.track_1} des={data.track_1_des} />
            </Grid>
            <Grid item sm={4}>
              <Tracks name={data.track_2} des={data.track_2_des} />
            </Grid>
            <Grid item sm={4}>
              <Tracks name={data.track_3} des={data.track_3_des} />
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Courses name={data.course_1} des={data.course_1_des} />
            </Grid>
            <Grid item xs={12}>
              <Courses name={data.course_2} des={data.course_2_des} />
            </Grid>
            <Grid item xs={12}>
              <Courses name={data.course_3} des={data.course_3_des} />
            </Grid>
          </Grid>
        </div>
      );
    }
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
