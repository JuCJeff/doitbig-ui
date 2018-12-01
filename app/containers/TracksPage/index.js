import React from 'react';
import Button from '@material-ui/core/Button';
import School from '@material-ui/icons/School';
import Navigation from '../../components/NavigationBar/index';
import TrackImage1 from '../../images/STS-Banner.jpg';
import NavigationBar from '../../components/NavigationBar/index';
import './style.css';
import './iconstyle.css';

/* eslint-disable react/prefer-stateless-function */
export default class TracksPage extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <Navigation />
        <div className="banner">
          <img src={TrackImage1} width="100%" alt="banner" />
        </div>

        <div>
          <meta charSet="utf-8" />
          <title>Glowing Icon Effects</title>
          <link rel="stylesheet" href="style.css" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <ul className="icons">
            <li>
              <a href="/course">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="/course">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="/course">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="/course">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
