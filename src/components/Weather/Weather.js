import React, { useState } from 'react';
import axios from 'axios';
import { Form } from '../Form/Form'
import { Card } from '../Card/Card'
import { Favorites } from '../Favorites/Favorites'
import { initLocalStorage } from '../../utils/localstorage';


export const Weather = () => {

  const initHistoryRequest = () => {
    const history = JSON.parse(localStorage.getItem('history'));
    if (history !== null) {
      if (favorites.includes(history.city)) {
        return true
      }
    }

    return false
  }


  // localStorage and favorites
  const [favorites, setFavorites] = useState(initLocalStorage())
  const [isIncludeInFavorite, setIsIncludeInFavorite] = useState(initHistoryRequest())




  const addToFavorites = (city) => {
    if (favorites.includes(city)) {
      setIsIncludeInFavorite(true)
    } else {
      let fav = favorites;
      fav.push(city)
      setFavorites(fav)
      localStorage.setItem('favorites', JSON.stringify(fav))
      setIsIncludeInFavorite(true)
    }
  }

  const deleteFavorites = (city) => {
    console.log(city);
    let fav = favorites;
    fav = fav.filter(item => item !== city)
    setIsIncludeInFavorite(false)
    setFavorites(fav)
    localStorage.setItem('favorites', JSON.stringify(fav))
  }



  // end

  const API = '9f35c9f77e6ec0ef94c0fdf3ff482571';

  const [mainTemp, setMainTemp] = useState('');
  const [isCityNameValid, setIsCityNameValid] = useState('');
  const [cityName, setCityName] = useState('');



  const tempToCelsius = temp => Math.round(temp - 273);
  const getWeather = async (inputCity) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API}`);
      const { data: { name, main: { temp } } } = response
      setMainTemp(tempToCelsius(temp));
      setIsCityNameValid(true);
      setCityName(name);
      localStorage.setItem('history', JSON.stringify({ city: name, temp: tempToCelsius(temp) }));

      if (favorites.includes(name)) {
        setIsIncludeInFavorite(true)
      } else {
        setIsIncludeInFavorite(false)
      }


    } catch (error) {
      setIsCityNameValid(false);
    }
  };

  // {city

  return (
    <div className="weather">
      <Form getWeather={getWeather} isCityNameValid={isCityNameValid} />
      <Card temp={mainTemp} city={cityName}
        addToFavorites={addToFavorites}
        favorites={favorites}
        isIncludeInFavorite={isIncludeInFavorite}
        deleteFavorites={deleteFavorites} />
      <Favorites
        city={cityName}
        getWeather={getWeather}
        favoritesList={favorites}
      />
    </div>
  )
}