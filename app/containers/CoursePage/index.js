import React from 'react';
import './index.css';
import NavigationBar from '../../components/NavigationBar/loadable';
import Image from '../../images/STS.jpg';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <img src={Image} className="images" alt="banner" />
      </div>
    );
  }
}
