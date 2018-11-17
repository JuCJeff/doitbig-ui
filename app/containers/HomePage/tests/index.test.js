import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import NavigationBar from '../../../components/NavigationBar/index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(
        <div>
          <NavigationBar />
        </div>,
      ),
    ).toEqual(true);
  });
});
