import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/index';
import classNames from 'classnames';

const Form = () => {
  const [inputCity, setInputCity] = useState('');

  const dispatch = useDispatch();
  const isCityNameValid = useSelector((state) => state.isCityNameValid);

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(getWeather(inputCity));
  };

  let inputClass = classNames({
    'form-control': true,
    'is-valid': isCityNameValid,
    'is-invalid': isCityNameValid === false,
  })

  return (
    <form onSubmit={submitFormHandler}>
      <input
        type="text"
        className={inputClass}
        placeholder="city"
        onChange={(event) => setInputCity(event.target.value)}
        value={inputCity}
      />
    </form>
  );
};

export default Form;
