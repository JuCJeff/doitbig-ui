import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from '../../../components/NavigationBar/index';

describe('<NavigationBar />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<NavigationBar />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
