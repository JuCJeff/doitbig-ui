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
import './index.css';
import NavigationBar from '../../components/NavigationBar/index';
import Image from '../../images/nobody_m.original.jpg';

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
          <img src={Image} alt="profile" width="150px" className="profile" />

          <ul>
            <li>First Name: {items.FirstName}</li>
            <li>Last Name: {items.LastName}</li>
            <li>Email: {items.Email}</li>
          </ul>

          <ul className="courses">
            <li># of Courses Taken:</li>
            <li># of Courses Taken:</li>
            <li>Upcoming course:</li>
          </ul>
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

ProfilePage.propTypes = {
  location: PropTypes.any,
};
