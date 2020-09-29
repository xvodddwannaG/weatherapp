import React, { useState } from 'react';


export const Form = ({ getWeather, isCityNameValid }) => {
  const [inputCity, setInputCity] = useState('');

  const submitFormHandler = (event) => {
    event.preventDefault();
    getWeather(inputCity);
  };


  let inputClass = 'form-control'
  if (isCityNameValid === true) {
    inputClass = 'form-control is-valid'
  } else if (isCityNameValid === false) {
    inputClass = 'form-control is-invalid'
  }


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
