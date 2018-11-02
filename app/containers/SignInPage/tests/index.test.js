import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import SignInPage from '../index';
// import messages from '../messages';

describe('<SingInPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<SignInPage />);
    expect(renderedComponent.contains(<h2>Login</h2>)).toEqual(true);
  });
});
