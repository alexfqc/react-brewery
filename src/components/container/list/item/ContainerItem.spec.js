import React from 'react';
import { shallow } from 'enzyme';
import ContainerItem from './ContainerItem';

const props = {
  id: 0,
  name: 'Pilsner',
  minTemp: 4,
  maxTemp: 6,
  temp: 5,
};

const props2 = {
  id: 0,
  name: 'Pilsner',
  minTemp: 4,
  maxTemp: 6,
  temp: 7,
};

describe('ContainerItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContainerItem {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should render the average temp correctly', () => {
    expect(wrapper.find('.item__average').at(0).text()).toBe('min 4°C - 6°C max');
  });

  it('Should render the temp correctly', () => {
    expect(wrapper.find('.item__temp').at(0).text()).toBe('5 °C');
  });

  it('Should not contains style color when temp is on of average', () => {
    expect(wrapper.find('.item').prop('style').color).not.toBeDefined();
  });

  it('Should contains style color when temp is out of average', () => {
    const wrapper2 = shallow(<ContainerItem {...props2} />);
    expect(wrapper2.find('.item').prop('style').color).toBe('#ca0d0d');
  });
});
