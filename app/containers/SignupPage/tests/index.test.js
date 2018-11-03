import React from 'react';
import { shallow } from 'enzyme';

import SignupPage from '../index';
import Background from '../../../images/Background.png';

describe('<SignupPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<SignupPage />);
    expect(
      renderedComponent.contains(
        <div>
          <div className="contentView">
            <div className="signupView">
              <div className="container">
                <div className="clearfix signupCont">
                  <div className="col-lg-6">
                    <img src={Background} alt="Background" />
                  </div>
                  <div className="col-lg-6">
                    <div className="signup">
                      <h1 className="title_h1">STS STUDENT</h1>
                      <h4 className="title_h4">
                        Please complete to create your account.
                      </h4>
                      <form>
                        <div className="clearfix signupRow">
                          <div className="col-lg-6">
                            <input type="text" placeholder="First name" />
                          </div>
                          <div className="col-lg-6">
                            <input type="text" placeholder="Last name" />
                          </div>
                        </div>
                        <div className="signupRow2">
                          <input type="email" placeholder="Email" />
                          <input type="password" placeholder="Password" />
                          <input
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </div>

                        <p className="termsInfo">
                          <input type="checkbox" className="specCheckbox" />
                          I agree with terms and conditions
                        </p>

                        <div className="upBtns text-center">
                          <button type="submit" className="btn-default">
                            Sign up
                          </button>
                        </div>
                        <div className="agreeView">
                          <p>Already have an account? Sign in.</p>
                        </div>
                      </form>
                      <div className="lowTitle">
                        Term of Users. Privacy Policy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ewm-pop" style={{ display: 'none' }}>
            <div className="text-center showCode">
              <div className="popverViews">
                <p>
                  Terms and Conditions for Software Training for Students (STS)
                </p>
              </div>
            </div>
          </div>
        </div>,
      ),
    ).toEqual(true);
  });
});
