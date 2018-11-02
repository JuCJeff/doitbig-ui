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
        <form>
          <h2>STS Student Login</h2>
          <div className="inputBox">
            {/* <label htmlFor="username"> */}
            <input type="text" name="username" required="" />
            Username
            {/* </label> */}
          </div>
          <div className="inputBox">
            {/* <label htmlFor="password"> */}
            <input type="password" name="password" required="" />
            Password
            {/* </label> */}
          </div>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
