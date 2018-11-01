import React from 'react';
import SignInForm from './SignInForm';

/* eslint-disable react/prefer-stateless-function */
export default class SignInPage extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <h2>Login</h2>
        <SignInForm />
      </div>
    );
  }
}
