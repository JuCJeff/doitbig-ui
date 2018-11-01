import React from 'react';
import './SignInForm.css';

/* eslint-disable react/prefer-stateless-function */
class SignInForm extends React.Component {
  render() {
    return (
      <form>
        <h2>Login</h2>
        <div className="inputBox">
          <label htmlFor="username">
            <input type="text" name="username" required="" />
            Username
          </label>
        </div>
        <div className="inputBox">
          <label htmlFor="password">
            <input type="password" name="password" required="" />
            Password
          </label>
        </div>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
}

export default SignInForm;
