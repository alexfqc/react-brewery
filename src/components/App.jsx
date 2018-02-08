import React from 'react';
import ContainerList from './container/list/ContainerList';
import containersMock from '../mock/containersMock';
import './App.css';

const getRandomArbitrary = (min, max) => Math.floor((Math.random() * (max - min)) + min);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      containers: [],
      intervalId: 0,
    };
  }

  componentWillMount() {
    this.setState({ containers: containersMock });

    const intervalId = setInterval(() => this.simulateServerDataChange(), 2000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  simulateServerDataChange() {
    const { containers } = this.state;
    const id = getRandomArbitrary(0, 5);
    const container = containers.find(c => c.id === id);
    const temp = getRandomArbitrary(container.minTemp, container.maxTemp + 2);
    const updatedContainer = {
      ...container,
      temp,
    };

    const updatedContainerList = [
      ...containers.slice(0, id),
      updatedContainer,
      ...containers.slice(id + 1),
    ];
    this.setState({ containers: updatedContainerList });
  }

  render() {
    const { containers } = this.state;
    return (
      <div className="app">
        <div className="app__container">
          <h2>BREVERY ONLINE</h2>
          <ContainerList containers={containers} />
        </div>
      </div>
    );
  }
}

export default App;
