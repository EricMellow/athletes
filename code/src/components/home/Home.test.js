import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import users from '../../data/users.json';
import * as getUsers from '../../api/getUsers';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with all athletes in state once the component mounts', () => {
    const expected = {
      athletes: users
    };

    expect(wrapper.state()).toEqual(expected);
  });

  describe('getAllAthletes', () => {

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Home />);
    });

    it('should call getUsers', () => {
      const spy = jest.spyOn(getUsers, 'default');
      wrapper.instance().getAllAthletes();

      expect(spy).toHaveBeenCalled();
    })
  })

});
