import React from 'react';
import SignInForm from './SignInForm';
import Background from '../../images/Background.png';
import './index.css';

/* eslint-disable react/prefer-stateless-function */
export default class SignInPage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="contentView">
          <div className="signinView">
            <div className="container">
              <div className="clearfix signinCont">
                <div className="col-lg-6">
                  <img src={Background} alt="background" />
                </div>
                <div className="col-lg-6">
                  <div className="signin">
                    <SignInForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
