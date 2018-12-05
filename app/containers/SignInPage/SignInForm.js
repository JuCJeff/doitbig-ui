import React from 'react';
import './SignInForm.css';

/* eslint-disable react/prefer-stateless-function */
export default class SignInForm extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <h1 className="title_h1">STS STUDENT</h1>
        <h4 className="title_h4">Please sign in to your account.</h4>

        <form action="http://localhost:3001/login" method="get">
          <div className="signinRow">
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="signinRow">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="upBtns text-center">
            <button type="submit" className="btn-default" href="/">
              Log in
            </button>
          </div>
          <div className="agreeView">
            <a href="/signup">Do not have an account? Sign up.</a>
          </div>
        </form>
      </div>
    );
  }
}
