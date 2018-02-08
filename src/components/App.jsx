import React from 'react';
import ContainerList from './container/list/ContainerList';
import { containersMock, simulateServerDataChange } from '../mock/containersMock';
import './App.css';

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

    const intervalId = setInterval(() => this.loadData(), 2000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  loadData() {
    const { containers } = this.state;
    const updatedContainerList = simulateServerDataChange(containers);

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
