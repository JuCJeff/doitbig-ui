import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import Tracks from '../Tracks';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(
        <Grid item sm={4}>
          <Tracks />
        </Grid>,
      ),
    ).toEqual(false);
  });
});
