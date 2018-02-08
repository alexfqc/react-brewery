import React from 'react';
import { mount } from 'enzyme';
import ContainerList from './ContainerList';
import ContainerItem from './item/ContainerItem';

const containers = [
  {
    id: 0,
    name: 'Pilsner',
    minTemp: 4,
    maxTemp: 6,
    temp: 5,
  },
  {
    id: 1,
    name: 'IPA',
    minTemp: 5,
    maxTemp: 6,
    temp: 7,
  },
  {
    id: 2,
    name: 'Lager',
    minTemp: 4,
    maxTemp: 7,
    temp: 4,
  },
  {
    id: 3,
    name: 'Stout',
    minTemp: 6,
    maxTemp: 8,
    temp: 7,
  },
  {
    id: 4,
    name: 'Wheat beer',
    minTemp: 3,
    maxTemp: 5,
    temp: 5,
  },
  {
    id: 5,
    name: 'Pale Ale',
    minTemp: 4,
    maxTemp: 6,
    temp: 8,
  },
];


describe('ContainerList component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ContainerList containers={containers} />);
  });
  it('renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should contain the ContainerItens', () => {
    expect(wrapper.find(ContainerItem).length).toBe(6);
  });

  it('should contain 2 containers out of average', () => {
    const itens = wrapper.find(ContainerItem);
    const styles = itens.map(node => node.childAt(0).prop('style'));
    expect(styles.filter(style => style.color).length).toBe(2);
  });

  it('should contain 4 containers on average', () => {
    const itens = wrapper.find(ContainerItem);
    const styles = itens.map(node => node.childAt(0).prop('style'));
    expect(styles.filter(style => !style.color).length).toBe(4);
  });
});
