import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/index'

const Form = () => {
  const [inputCity, setInputCity] = useState('');

  const dispatch = useDispatch()
  const isCityNameValid = useSelector(state => state.isCityNameValid)

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(getWeather(inputCity))
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

export default Form;
