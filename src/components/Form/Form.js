import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Form = ({ getWeather, isCityNameValid }) => {
  const [inputCity, setInputCity] = useState('');

  const submitFormHandler = (event) => {
    event.preventDefault();
    getWeather(inputCity);
  };

  function getInputClass() {
    if (isCityNameValid === true) {
      return 'is-valid';
    } if (isCityNameValid === false) {
      return 'is-invalid';
    }
    return null;
  }

  return (
    <form onSubmit={submitFormHandler}>
      <input
        type="text"
        className={`form-control ${getInputClass()}`}
        placeholder="city"
        onChange={(event) => setInputCity(event.target.value)}
        value={inputCity}
      />
    </form>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func,
  isCityNameValid: PropTypes.any
}

export default Form;
