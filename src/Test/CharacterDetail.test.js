import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('renders without crashing', () => {
    const mockProps = {
      match: {
        params: {
          characterId: '1', // Replace this with a valid character ID from your data
        },
      },
    };
    shallow(<CharacterDetail {...mockProps} />);
  });

  it('renders the character name correctly', () => {
    const mockProps = {
      match: {
        params: {
          characterId: '1', // Replace this with a valid character ID from your data
        },
      },
    };
    const wrapper = shallow(<CharacterDetail {...mockProps} />);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Character Name'); // Replace 'Character Name' with the actual name from your data
  });
});
