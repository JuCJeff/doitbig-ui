import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import School from '@material-ui/icons/School';
import TrackImage1 from '../../../images/track1.png';
import TrackImage2 from '../../../images/track2.png';
import TrackImage3 from '../../../images/track3.jpg';
import TracksPage from '../index';
import Navigation from '../../../components/NavigationBar/index';

describe('<TracksPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<TracksPage />);
    expect(
      renderedComponent.contains(
        <div className="body">
          <Navigation />
          <div className="banner">
            <img src={TrackImage1} width="100%" alt="banner" />
          </div>

          <h1>Web Developer Track</h1>
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
            <img src={TrackImage2} width="100%" alt="banner" />
          </div>

          <h1>Designer Track</h1>
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
            <img src={TrackImage3} width="100%" alt="banner" />
          </div>

          <h1>Data Expert Track</h1>
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
