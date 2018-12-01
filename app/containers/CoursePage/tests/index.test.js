import React from 'react';
import { shallow } from 'enzyme';

import CoursePage from '../index';

describe('<CoursePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <CoursePage location={{ search: '12345' }} />,
    );
    expect(renderedComponent.contains(<p>Loading...</p>)).toEqual(true);
  });
});
