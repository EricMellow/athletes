import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useLocation } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/"
  })
}));

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
