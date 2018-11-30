/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import './index.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <p className="mega">
          4
          <span className="boom">0</span>4
          <div className="bola" />
        </p>
        <p className="mini">This is the error page.</p>
      </div>
    );
  }
}
