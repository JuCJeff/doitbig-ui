import React from 'react';
import NavigationBar from '../../components/NavigationBar/index';
import Tracks from './trackCard';
import './iconstyle.css';

/* eslint-disable react/prefer-stateless-function */
export default class TracksPage extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <NavigationBar />
        <Tracks />
        <Tracks />
        <Tracks />
      </div>
    );
  }
}
