import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    pathname: "localhost:3000/athlete/15321"
  })
}));

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

    
});
