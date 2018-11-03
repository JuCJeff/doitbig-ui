import React from 'react';
// import { TransitionMotion, spring } from 'react-motion';
import './SignInForm.css';

/* eslint-disable react/prefer-stateless-function */
export default class SignInForm extends React.PureComponent {
  // constructor() {
  //   super();

  //   this.state = {
  //     inputValue: '',
  //     fieldActive: false,
  //   };
  // }

  render() {
    return (
      <div className="box">
        <h1 className="title_h1">STS STUDENT</h1>
        <h4 className="title_h4"> Please sign in to your account.</h4>

        <form>
          <div className="signinRow">
            <input type="email" placeholder="Email" />
          </div>
          <div className="signinRow">
            <input type="password" placeholder="Password" />
          </div>
          <div className="upBtns text-center">
            <button type="submit" className="btn-default">
              Log in
            </button>
          </div>
          <div className="agreeView">
            <a href="/signin">Already have an account? Sign up.</a>
          </div>
        </form>
      </div>
    );
  }
}
