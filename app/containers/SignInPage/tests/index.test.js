import React from 'react';
import { shallow } from 'enzyme';

import SignInPage from '../index';
import SignInForm from '../SignInForm';
import Background from '../../../images/Background.png';

describe('<SingInPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<SignInPage />);
    expect(
      renderedComponent.contains(
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
        </div>,
      ),
    ).toEqual(true);
  });
});
