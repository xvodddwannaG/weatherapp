import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';

const Weather = () => {
  const API = '9f35c9f77e6ec0ef94c0fdf3ff482571';
  const [mainTemp, setMainTemp] = useState('');
  const [isCityNameValid, setIsCityNameValid] = useState('');
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    // ????
    const previousRequest = JSON.parse(localStorage.getItem('history'));
    if (previousRequest !== null) {
      setCityName(previousRequest.city);
      setMainTemp(previousRequest.temp);
    }
  }, []);

  const getFavorites = () => {
    if (JSON.parse(localStorage.getItem('favorites')) === null) {
      localStorage.setItem('favorites', JSON.stringify([]));
      return [];
    }
    return JSON.parse(localStorage.getItem('favorites'));
  };

  const [favorites, setFavorites] = useState(getFavorites());

  const isFavoriteCityInHistory = () => {
    // ????
    const previousRequest = JSON.parse(localStorage.getItem('history'));
    if (previousRequest !== null && favorites.includes(previousRequest.city)) {
      return true;
    }
    return false;
  };

  const [isFavoriteCity, setIsFavoriteCity] = useState(isFavoriteCityInHistory());

  const addToFavorites = (city) => {
    if (favorites.includes(city)) {
      setIsFavoriteCity(true);
    } else {
      const newFavorites = favorites.slice();
      newFavorites.push(city);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavoriteCity(true);
    }
  };

  const deleteFavorites = (city) => {
    let newFavorites = favorites.slice();
    newFavorites = newFavorites.filter((item) => item !== city);
    setIsFavoriteCity(false);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // end

  const getWeather = async (inputCity) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API}&units=metric`);
      const { data: { name, main: { temp } } } = response;
      const roundTemp = Math.round(temp);
      setMainTemp(roundTemp);
      setIsCityNameValid(true);
      setCityName(name);
      localStorage.setItem('history', JSON.stringify({ city: name, temp: roundTemp }));
      if (favorites.includes(name)) {
        setIsFavoriteCity(true);
      } else {
        setIsFavoriteCity(false);
      }
    } catch (error) {
      setIsCityNameValid(false);
    }
  };

  return (
    <div className="weather">
      <Form getWeather={getWeather} isCityNameValid={isCityNameValid} />
      <Card
        temp={mainTemp}
        city={cityName}
        addToFavorites={addToFavorites}
        isFavoriteCity={isFavoriteCity}
        deleteFavorites={deleteFavorites}
      />
      <Favorites
        getWeather={getWeather}
        favoritesList={favorites}
      />
    </div>
  );
};

export default Weather;
