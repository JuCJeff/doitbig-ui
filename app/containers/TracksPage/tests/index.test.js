import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import School from '@material-ui/icons/School';
import TrackImage1 from '../../../images/STS-Banner.jpg';
import TracksPage from '../index';

describe('<TracksPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<TracksPage />);
    expect(
      renderedComponent.contains(
        <div className="body">
          <div className="banner">
            <img src={TrackImage1} width="100%" alt="banner" />
          </div>

          <h1>Web Development Track</h1>
          <ul>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
          </ul>

          <div className="banner">
            <img src={TrackImage1} width="100%" alt="banner" />
          </div>

          <h1>Design Track</h1>
          <ul>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
            <li>
              <Button variant="fab">
                <School />
              </Button>
            </li>
          </ul>
        </div>,
      ),
    ).toEqual(true);
  });
});
