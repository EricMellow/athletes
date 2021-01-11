import React from 'react';
import Athletes from './Athletes';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import users from '../../data/users.json';

Enzyme.configure({ adapter: new Adapter() });

describe('Athletes', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      athletes: users
    };
    wrapper = shallow(<Athletes {...props}/>);
  });

  it('should match the snapshot with athlete props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without athlete props', () => {
    const props = {
      athletes: []
    };
    wrapper = shallow(<Athletes {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  

});
