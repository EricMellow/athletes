import React from 'react';
import Display from './Display';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as getTotalWeightByDate from '../../api/getTotalWeightByDateForUser';
import * as getTotalRepsByDate from '../../api/getTotalRepsByDateForUser';

Enzyme.configure({ adapter: new Adapter() });

describe('Display', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      id: 402,
      type: 'Weight'
    };
    wrapper = shallow(<Display {...props}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        id: 402,
        type: 'Weight'
      };
      wrapper = shallow(<Display {...props} />);
    });

    it('calls getTotalWeightByDate with the ID from props if the props type is Weight', () => {
      const spy = jest.spyOn(getTotalWeightByDate, 'default');
      wrapper.instance().componentDidMount();
      expect(spy).toHaveBeenCalled();
    })

    it('calls getTotalRepsByDate with the ID from props if the props type is Weight', () => {
      const props = {
        id: 402,
        type: 'Reps'
      };
      wrapper = shallow(<Display {...props} />);
      const spy = jest.spyOn(getTotalRepsByDate, 'default');
      wrapper.instance().componentDidMount();
      expect(spy).toHaveBeenCalled();
    })
  })

});
