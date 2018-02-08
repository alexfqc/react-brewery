import React from 'react';
import PropTypes from 'prop-types';
import ContainerItem from './item/ContainerItem';
import './ContainerList.css';

const ContainerList = ({ containers }) => (
  <div className="list">
    {containers.map(container => <ContainerItem key={container.id} {...container} />)}
  </div>
);

ContainerList.propTypes = {
  containers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    temp: PropTypes.number,
  })).isRequired,
};

export default ContainerList;
