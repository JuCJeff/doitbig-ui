import React from 'react';
import SignInForm from './SignInForm';
import Background from '../../images/Background.png';
import './index.css';

/* eslint-disable react/prefer-stateless-function */
export default class SignInPage extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <img src={Background} alt="background" />
        <SignInForm />
      </div>
    );
  }
}
