import React from 'react';
import { shallow } from 'enzyme';

import CoursePage from '../index';

describe('<CoursePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<CoursePage />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
