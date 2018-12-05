import React from 'react';
// import { TransitionMotion, spring } from 'react-motion';
// import './EditProfileForm.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditProfileForm extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <h1 className="title_h1">Edit Profile</h1>
        <h4 className="title_h4">What information do you want to change:</h4>

        <form>
          <div className="editprofileRow">
            <input type="First Name" placeholder="First Name" />
          </div>
          <div className="editprofileRow">
            <input type="Last Name" placeholder="Last Name" />
          </div>
          <div className="editprofileRow">
            <input type="Description" placeholder="Description" />
          </div>
          <div className="editprofileRow">
            <input type="Photo" placeholder="Photo" />
          </div>
          <div className="upBtns text-center">
            <button type="submit" className="btn-default">
              <a
                href="/profile"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                {' '}
                Save Changes{' '}
              </a>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
