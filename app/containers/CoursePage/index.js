import React from 'react';
import Description from './description';
import Avatar from './avatar';
import NavigationBar from '../../components/NavigationBar/loadable';
import Image from '../../images/STS.jpg';
import Footer from '../../components/Footer';
import './index.css';

/* eslint-disable react/prefer-stateless-function */
export default class CoursePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <img src={Image} className="images" alt="banner" />
        <div className="description">
          <Description />
        </div>
        <Avatar />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
