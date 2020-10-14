import React, {ReactEventHandler, useState} from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { getWeather } from '../../redux/applyMiddleware';
import { useIsCityNameValid } from '../../redux/selectors'

const Form: React.FC = () => {
  const [inputCity, setInputCity] = useState('');

  const dispatch = useDispatch();
  const isCityNameValid = useIsCityNameValid()

  const submitFormHandler = (event: any) => {
    event.preventDefault();
    dispatch(getWeather(inputCity));
  };

  const inputClass = classNames({
    'form-control': true,
    'is-valid': isCityNameValid,
    'is-invalid': isCityNameValid === false,
  });

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
