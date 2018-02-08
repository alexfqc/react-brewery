import React from 'react';
import PropTypes from 'prop-types';
import './ContainerItem.css';

const ContainerItem = ({
  name,
  minTemp,
  maxTemp,
  temp,
}) => (
  <div
    className="item"
    style={
      (temp < minTemp || temp > maxTemp) ?
      { color: '#ca0d0d' }
      : {}
    }
  >
    <div
      className="item__name"
    >
      {name}
    </div>
    <div className="item__average">{`min ${minTemp}°C - ${maxTemp}°C max`}</div>
    <div
      className="item__temp"
    >
      {`${temp} °C`}
    </div>
  </div>
);

ContainerItem.propTypes = {
  name: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
};

export default ContainerItem;
