import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import { Favorites } from './components/Favorites';
import { Card } from './components/Card/Card'
import { Form } from './components/Form/Form'
import {addFavorites, favoritesStorage, clearFavorites} from './utils/localstorage'

function App() {

  const API = '9f35c9f77e6ec0ef94c0fdf3ff482571'

  const [mainTemp, setMainTemp] = useState('');
  const [inputValid, setInputValid] = useState('');
  const [validCity, setValidCity] = useState('');

  const fetchData = async (inputCity) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API}`);
      setMainTemp(Math.round(response.data.main.temp - 273))
      setInputValid('is-valid')
      setValidCity(response.data.name);
      localStorage.setItem('history', JSON.stringify({ city: response.data.name, temp: Math.round(response.data.main.temp - 273) }))
    } catch (error) {
      console.error(error);
      setInputValid('is-invalid')
    }
  }

  return (
    <div className="App">
      <Form fetchApi={fetchData} inputValid={inputValid} />
      <Card temp={mainTemp} city={validCity} />
      <Favorites city={validCity} inputValid={inputValid} addFavorites={addFavorites} favorites={favoritesStorage} fetchApi={fetchData} clearFavorites={clearFavorites} />
    </div>
  );
}

export default App;
