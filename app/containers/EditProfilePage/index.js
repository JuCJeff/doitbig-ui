import React from 'react';
import EditProfileForm from './EditProfileForm';
import Background from '../../images/Background.png';
import './index.css';
import NavigationBar from '../../components/NavigationBar/index';

/* eslint-disable react/prefer-stateless-function */
export default class EditProfilePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <div className="contentView">
          <div className="signinView">
            <div className="container">
              <div className="clearfix signinCont">
                <div className="col-lg-6">
                  <img src={Background} alt="background" />
                </div>
                <div className="col-lg-6">
                  <div className="signin">
                    <EditProfileForm />
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
