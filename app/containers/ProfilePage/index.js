/*
 * ProfilePage
 *
 * This is the profile page that contains users' information
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import PropTypes from 'prop-types';
import React from 'react';
import NavigationBar from '../../components/NavigationBar/index';
import Footer from '../../components/Footer';
import Donald from '../../images/Donald.png';
import './index.css';

const axios = require('axios');
const qs = require('query-string');
const server = axios.create({
  baseURL: 'http://localhost:3001',
});

/* eslint-disable react/prefer-stateless-function */
export default class ProfilePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    server.get(`/profile?uid=${qs.parse(this.props.location.search).uid}`).then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data,
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
    const { error, isLoaded, items } = this.state;
    if (!error && isLoaded) {
      return (
        <div className="body">
          <NavigationBar />

          <div className="display-container">
            <div className="display">
              <img
                src={Donald}
                alt="profile"
                width="150px"
                className="profile"
              />
              <ul className="personal">
                <li>
                  First Name: <b>{items.FirstName}</b>
                </li>
                <li>
                  Last Name: <b>{items.LastName}</b>
                </li>
                <li>
                  Email: <b>{items.Email}</b>
                </li>
              </ul>

              <ul className="courses">
                <li>
                  # of Courses Taken: <b>3</b>
                </li>
                <li>
                  # of Tracks Taken: <b>1</b>
                </li>
                <li>
                  Upcoming course: <b>CSS 2</b>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

ProfilePage.propTypes = {
  location: PropTypes.any,
};
