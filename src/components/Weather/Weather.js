import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import { setCardData, setFavoritsList, setIsFavoriteCity } from '../../redux/index';

const Weather = () => {
  const dispatch = useDispatch();
  const favoritesListRedux = useSelector((state) => state.favoritsList);
  const isFavoriteCity = useSelector((state) => state.data.isFavoriteCity);

  useEffect(() => {
    const previousRequest = JSON.parse(localStorage.getItem('history'));
    if (previousRequest !== null) {
      dispatch(setCardData(previousRequest.city, previousRequest.temp));
    }

    if (JSON.parse(localStorage.getItem('favorites')) === null) {
      localStorage.setItem('favorites', JSON.stringify([]));
      dispatch(setFavoritsList([]));
    } else {
      const favoritsList = JSON.parse(localStorage.getItem('favorites'));
      dispatch(setFavoritsList(favoritsList));
    }

    if (previousRequest !== null && favoritesListRedux.includes(previousRequest.city)) {
      dispatch(setIsFavoriteCity(true));
    } else {
      dispatch(setIsFavoriteCity(false));
    }
  }, [isFavoriteCity]);

  const addToFavorites = (city) => {
    if (favoritesListRedux.includes(city)) {
      dispatch(setIsFavoriteCity(false));
    } else {
      const newFavoritesListRedux = favoritesListRedux.slice();
      newFavoritesListRedux.push(city);
      dispatch(setFavoritsList(newFavoritesListRedux));
      dispatch(setIsFavoriteCity(true));
      localStorage.setItem('favorites', JSON.stringify(newFavoritesListRedux));
    }
  };

  const deleteFavorites = (city) => {
    const newFavoritesListRedux = favoritesListRedux.filter((item) => item !== city);
    dispatch(setIsFavoriteCity(false));
    dispatch(setFavoritsList(newFavoritesListRedux));
    localStorage.setItem('favorites', JSON.stringify(newFavoritesListRedux));
  };

  return (
    <div className="weather">
      <Form />
      <Card
        addToFavorites={addToFavorites}
        isFavoriteCity={isFavoriteCity}
        deleteFavorites={deleteFavorites}
      />
      <Favorites
        favoritesList={favoritesListRedux}
      />
    </div>
  );
};

export default Weather;
