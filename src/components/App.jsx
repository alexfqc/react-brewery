import React from 'react';
import ContainerList from './container/list/ContainerList';
import './App.css';

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

const App = () => (
  <div className="app">
    <div className="app__container">
      <h2>BREVERY ONLINE</h2>
      <ContainerList containers={containers} />
    </div>
  </div>
);

export default App;
