import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders without crashing', () => {
    shallow(<Characters />);
  });

  it('renders the correct number of characters', () => {
    const wrapper = shallow(<Characters />);
    expect(wrapper.find('div')).toHaveLength(3); // Update this to the correct number of characters in the list
  });
});
