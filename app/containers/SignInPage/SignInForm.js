import React from 'react';
import './SignInForm.css';

class SignInForm extends React.Component {
  render() {
    return (
      <form>
        <h2>Login</h2>
        <div className="inputBox">
          <input type="text" name="username" required="" />
          <label>Username</label>
        </div>
        <div className="inputBox">
          <input type="password" name="password" required="" />
          <label>Password</label>
        </div>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
}

export default SignInForm;
