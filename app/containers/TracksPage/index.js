import React from 'react';
import Button from '@material-ui/core/Button';
import School from '@material-ui/icons/School';
import Navigation from '../../components/NavigationBar/index';
import TrackImage1 from '../../images/track1.png';
import TrackImage2 from '../../images/track2.png';
import TrackImage3 from '../../images/track3.jpg';
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

        <h1>Web Developer Track</h1>
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
          <img src={TrackImage2} width="100%" alt="banner" />
        </div>

        <h1>Designer Track</h1>
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
          <img src={TrackImage3} width="100%" alt="banner" />
        </div>

        <h1>Data Expert Track</h1>
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
