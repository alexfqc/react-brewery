import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import ContainerList from './container/list/ContainerList';
import ContainerItem from './container/list/item/ContainerItem';

describe('App component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('renders without crashing', () => {
    expect(mount(<App />)).toBeDefined();
  });

  it('Should Contain the component ContainerList', () => {
    const app = mount(<App />);
    expect(app.find(ContainerList)).toBeDefined();
  });

  it('Should Contain 6 containers', () => {
    const app = mount(<App />);
    expect(app.find(ContainerItem).length).toBe(6);
  });

  it('loadData() should be called after 2s', () => {
    const wrapper = mount(<App />);
    wrapper.instance().loadData = jest.fn();
    wrapper.update();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().loadData).not.toHaveBeenCalled();

    jest.runTimersToTime(2000);
    expect(wrapper.instance().loadData).toHaveBeenCalled();
  });

  it('Should call clearInterval when unmount', () => {
    window.clearInterval = jest.fn();

    const wrapper = mount(<App />);
    wrapper.unmount();

    expect(window.clearInterval).toHaveBeenCalled();
  });
});
