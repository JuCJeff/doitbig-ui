import React from 'react';
import './SignInForm.js';

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
