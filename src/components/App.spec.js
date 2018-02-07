import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import ContainerList from './container/list/ContainerList';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('Should Contain the component ContainerList', () => {
    const app = mount(<App />);
    expect(app.find(ContainerList).length).toBe(1);
  });
});
