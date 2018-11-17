import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import NavigationBar from '../../../components/NavigationBar/index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(
        <div className="box">
          <NavigationBar />
          <h1>Profile</h1>
          <img
            /* eslint-disable global-require */
            src={require('../../../images/nobody_m.original.jpg')}
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
        </div>,
      ),
    ).toEqual(true);
  });
});
