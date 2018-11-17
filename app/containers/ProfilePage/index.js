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

import React from 'react';
import './index.css';
import NavigationBar from '../../components/NavigationBar/index';

/* eslint-disable react/prefer-stateless-function */
export default class ProfilePage extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <NavigationBar />
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
            <strong>First Name: </strong>
          </li>
          <li>
            <strong>Last Name: </strong>
          </li>
          <li>
            <strong>Email: </strong>
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
}
