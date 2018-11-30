import React from 'react';
import { shallow } from 'enzyme';

import SignInForm from '../index';

describe('<SingInForm />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<SignInForm />);
    expect(renderedComponent).toMatchSnapshot();
    // expect(
    //   renderedComponent.contains(
    //     <div className="body">
    //       <img alt="background" src="IMAGE_MOCK" />
    //       <SignInForm />
    //     </div>,
    //   ),
    // ).toEqual(true);
  });
});
