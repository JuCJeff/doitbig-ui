import React from 'react';
import { shallow } from 'enzyme';

import ProfilePage from '../index';

describe('<ProfilePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <ProfilePage location={{ search: '12345' }} />,
    );
    expect(renderedComponent.contains(<p>Loading...</p>)).toEqual(true);
  });
});
