import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/STS-Banner.jpg';
import NavigationBar from '../../components/NavigationBar/index';
import Tracks from './Tracks';
import Courses from './Courses';
import Footer from '../../components/Footer';
import Track1 from '../../images/track1.png';
import Track2 from '../../images/track2.png';
import Track3 from '../../images/track3.jpg';
import Course1 from '../../images/course1.png';
import Course2 from '../../images/course2.jpg';
import Course3 from '../../images/course3.jpg';

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
              <Tracks name={data.track_1} des={data.track_1_des} img={Track1} />
            </Grid>
            <Grid item sm={4}>
              <Tracks name={data.track_2} des={data.track_2_des} img={Track2} />
            </Grid>
            <Grid item sm={4}>
              <Tracks name={data.track_3} des={data.track_3_des} img={Track3} />
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Courses
                name={data.course_1}
                des={data.course_1_des}
                img={Course1}
              />
            </Grid>
            <Grid item xs={12}>
              <Courses
                name={data.course_2}
                des={data.course_2_des}
                img={Course2}
              />
            </Grid>
            <Grid item xs={12}>
              <Courses
                name={data.course_3}
                des={data.course_3_des}
                img={Course3}
              />
            </Grid>
          </Grid>
          <div>
            <Footer />
          </div>
        </div>
      );
    }
    return (
      <div>
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
}
