import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from '../../../components/NavigationBar/index';
import Tracks from '../trackCard';
import TracksPage from '../index';

describe('<TracksPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<TracksPage />);
    expect(
      renderedComponent.contains(
        <div className="body">
          <NavigationBar />
          <Tracks />
          <Tracks />
          <Tracks />
        </div>,
      ),
    ).toEqual(true);
  });
});
