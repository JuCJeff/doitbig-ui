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
// import PropTypes from 'prop-types';
import React from 'react';
import './index.css';
// const axios = require('axios');
// const qs = require('query-string');
// const server = axios.create({
//   baseURL: 'http://localhost:3001',
// });

/* eslint-disable react/prefer-stateless-function */
export default class ProfilePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false,
      items: [],
    };
  }

  // componentDidMount() {
  //   server.get(`/profile?uid=${qs.parse(this.props.location.search).uid}`).then(
  //     result => {
  //       this.setState({
  //         isLoaded: true,
  //         items: result.data,
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         isLoaded: true,
  //         error,
  //       });
  //     },
  //   );
  // }

  render() {
    const { /* error, isLoaded, */ items } = this.state;
    // if (!error && isLoaded) {
    return (
      <div className="box">
        <h1>Profile</h1>
        <img
          /* eslint-disable global-require */
          src={require('../../images/nobody_m.original.jpg')}
          /* eslint-disable global-require */
          alt="profile"
          width="150px"
        />
        <h2>Name of User</h2>
        {/* any image for profile instead of button */}
        <ul>
          <li>
            <strong>First Name: {items.FirstName}</strong>
          </li>
          <li>
            <strong>Last Name: {items.LastName}</strong>
          </li>
          <li>
            <strong>Email: {items.Email}</strong>
          </li>
          <li>
            <strong>Previous Password: </strong>
          </li>
          <li>
            <strong>New Password: </strong>
          </li>
          <li>
            <strong>Confirm Password: </strong>
          </li>
          <div className="courses">
            <li>
              <strong>Number of Courses Taken: </strong>
            </li>
            <li>
              <strong>Name of Courses Taken: </strong>
            </li>
            <table>
              <tr>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Track</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>Class 1</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <td>Class 2</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <td>Class 3</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </table>
            <li>
              <strong>Upcoming: </strong>
            </li>
          </div>
        </ul>
      </div>
    );
  }
  //   return <p>Loading...</p>;
  // }
}

// ProfilePage.propTypes = {
//   location: PropTypes.any,
// };
