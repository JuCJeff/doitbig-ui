import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationBar from '../../components/NavigationBar/index';
import Courses from './courses';
import Course1 from '../../images/course1.png';
import Course2 from '../../images/course2.jpg';
import Course3 from '../../images/course3.jpg';
import Footer from '../../components/Footer';

const axios = require('axios');
const server = axios.create({
  baseURL: 'http://localhost:3001',
});

export default class CoursesPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    server.get(`/courses`).then(
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
        <NavigationBar />
      </div>
    );
  }
}
