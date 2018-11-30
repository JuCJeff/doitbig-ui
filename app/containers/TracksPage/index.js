import React from 'react';
import Button from '@material-ui/core/Button';
import School from '@material-ui/icons/School';
import Navigation from '../../components/NavigationBar/index';
import TrackImage1 from '../../images/STS-Banner.jpg';
import './style.css';

/* eslint-disable react/prefer-stateless-function */
export default class TracksPage extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <Navigation />
        <div className="banner">
          <img src={TrackImage1} width="100%" alt="banner" />
        </div>

        <h1>Web Development Track</h1>
        <ul>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
        </ul>

        <div className="banner">
          <img src={TrackImage1} width="100%" alt="banner" />
        </div>

        <h1>Design Track</h1>
        <ul>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
          <li>
            <Button variant="fab">
              <School />
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
