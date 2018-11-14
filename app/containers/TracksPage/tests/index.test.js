import React from 'react';
import { shallow } from 'enzyme';

import TracksPage from '../index';

describe('<TracksPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<TracksPage />);
    expect(
      renderedComponent.contains(
        <div>
          <h2>Hello World</h2>
        </div>,
      ),
    ).toEqual(true);
  });
});
